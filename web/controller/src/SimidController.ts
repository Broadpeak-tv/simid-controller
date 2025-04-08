import {
  CreativeData,
  CreativeGetMediaStateMessageArgs,
  CreativeMessage,
  Dimensions,
  EnvironmentData,
  MediaState,
  Message,
  PlayerAdStoppedMessageArgs,
  PlayerErrorCode,
  PlayerInitMessageArgs,
  PlayerMessage,
  ProtocolMessage,
  RejectMessageArgsValue,
  SkippableState,
  StopCode,
  CreativeRequestResizeMessageArgs,
} from './SimidMessages'
import { SimidComponent } from "./SimidComponent"

const NO_REQUESTED_DURATION = 0
const UNLIMITED_DURATION = -2

const MEDIA_STATE_POLL_INTERVAL_MS = 500

/** 
 * All the logic for a simple SIMID player/controller
 */
export class SimidController extends SimidComponent {

  // #region MEMBERS

  // The initial main player container element dimensions
  private _mainPlayerDimensions: Dimensions | undefined

  // The creative URI
  private _creativeUri: string

  // The ad parameters
  private _adParameters: string

  // A reference to the iframe holding the SIMID creative
  private _simidIframe: HTMLIFrameElement
  
  // A boolean indicating if current is stopping
  private _isStopping: boolean

  // A boolean indicating if current ad can be skipped (handled by creative)
  private _adSkippable: boolean

  // A number indicating when the non linear ad started
  private _nonLinearStartTime: number | undefined

  // The duration requested by the ad
  private _requestedDuration: number

  // Callback functions
  private _onGetMediaState: (() => MediaState) | undefined
  private _onPlayMedia: (() => boolean) | undefined
  private _onPauseMedia: (() => boolean) | undefined
  private _onAddSimid: ((HTMLIFrameElement) => void) | undefined
  private _onShowSimid: ((boolean) => void) | undefined
  private _onResizeSimid: ((DOMRect) => boolean) | undefined
  private _onResizePlayer: ((DOMRect) => void) | undefined
  private _onComplete: ((boolean) => void) | undefined

  private _intervalMediaState: number | undefined

  // The unique ID for the interval used to compares the requested change duration and the current ad time.
  private _durationInterval: number

  // #endregion MEMBERS

  /**
   * Set up the SIMId controller starts listening for messages from the creative.
   * @param playerDimensions the main player dimensions
   * @param creativeUri The creative URI
   * @param adParameters the creative ad parameters
   * @param adDuration the display duration of the creative (0 by default, meaning no requested duration)
   * @param adSkippable true if the linear ad is skippable (false by default)
   */
  constructor(
    playerDimensions: DOMRect, 
    creativeUri: string,
    adParameters = '',
    adDuration = NO_REQUESTED_DURATION,
    adSkippable = false) {
    
    super('Player')

    this._mainPlayerDimensions = playerDimensions as Dimensions

    this._creativeUri = creativeUri
    this._adParameters = adParameters
    this._adSkippable = adSkippable
    this._isStopping = false

    this._simidIframe = undefined
    this._nonLinearStartTime = undefined
    this._requestedDuration = adDuration
    this._durationInterval = NaN
 
    this.addCreativeMessageListeners()
  }

  // #region PUBLIC METHODS 

  /**
   * Set the callback function called to retrieve current media state. 
   */
  public set onGetMediaState(cb: () => MediaState) {
    this._onGetMediaState = cb
  }

  /**
   * Set the callback function called when the main video has to be played or resumed. 
   */
  public set onPlayMedia(cb: () => boolean) {
    this._onPlayMedia = cb
  }

  /**
   * Set the callback function called when the main video has to be paused. 
   */
  public set onPauseMedia(cb: () => boolean) {
    this._onPauseMedia = cb
  }

  /**
   * Set the callback function called when a new SIMID iframe has to be added in application DOM. 
   */
  public set onAddSimid(cb: (iframe: HTMLIFrameElement) => boolean) {
    this._onAddSimid = cb
  }

  /**
   * Set the callback function called when a the SIMID iframe has to be showed of hidden. 
   */
  public set onShowSimid(cb: (show: boolean) => void) {
    this._onShowSimid = cb
  }

  /**
   * Set the callback function called when the SIMID iframe has to be resized. 
   */
    public set onResizeSimid(cb: (dimensions: DOMRect) => boolean) {
      this._onResizeSimid = cb
    }
  
  /**
   * Set the callback function called when the media player element has to be resized. 
   */
  public set onResizePlayer(cb: (dimensions: DOMRect) => void) {
    this._onResizePlayer = cb
  }

  /**
   * Set the callback function called when the current SIMID duration has completed. 
   */
  public set onComplete(cb: (boolean) => void) {
    this._onComplete = cb
  }

  /**
   * Initialize and load ad. This should be called before an ad plays.
   * Creates an iframe with the creative in it, then uses a promise to call init on the creative as soon as the creative initializes a session.
   */
  public load() {
    // [2] - Create iframe element
    this._simidIframe = this._createSimidIframe()
  
    // After the iframe is created the player will wait until the SIMID creative initializes the communication channel (see onCreateSession)
  }

  public reset() {
    this._stopAd()
  }
  // #endregion PUBLIC METHODS

  protected addCreativeMessageListeners() {
    this.addMessageListener(ProtocolMessage.CREATE_SESSION, (message: Message) => this.onCreateSession(message))
    this.addMessageListener(CreativeMessage.FATAL_ERROR, (message: Message) => this.onCreativeFatalError(message))
    this.addMessageListener(CreativeMessage.GET_MEDIA_STATE, (message: Message) => this.onCreativeGetMediaState(message))
    this.addMessageListener(CreativeMessage.REQUEST_PAUSE, (message: Message) => this.onCreativeRequestPause(message))
    this.addMessageListener(CreativeMessage.REQUEST_PLAY, (message: Message) => this.onCreativeRequestPlay(message))
    this.addMessageListener(CreativeMessage.REQUEST_RESIZE, (message: Message) => this.onCreativeRequestResize(message))
    this.addMessageListener(CreativeMessage.REQUEST_SKIP, (message: Message) => this.onCreativeRequestSkip(message))
    this.addMessageListener(CreativeMessage.REQUEST_STOP, (message: Message) => this.onCreativeRequestStop(message))
  }

  // #region PROTECTED METHODS
  // #region CREATIVE MESSAGE HANDLERS
  protected onCreateSession(message: Message) {
    // [3] - createSession sent by the creative (resolve message done in SimidComponent::_handleProtocolMessage())
    // [4] - send Player:init message
    this._sendInitMessage()
  }

  protected onCreativeFatalError(message: Message) {
    this.resolveMessage(message)
    this._stopAd(StopCode.CREATIVE_INITIATED)
  }

  protected onCreativeGetMediaState(message: Message) {
    const mediaState = this._onGetMediaState?.() 
    const args: CreativeGetMediaStateMessageArgs = {
      currentSrc: mediaState ? mediaState.currentSrc : '',
      currentTime: mediaState ? mediaState.currentTime : 0,
      duration: mediaState ? mediaState.duration : 0,
      ended: mediaState ? mediaState.ended : true,
      muted: mediaState ? mediaState.muted : false,
      paused: mediaState ? mediaState.paused : true,
      volume: mediaState ? mediaState.volume : 0,
      fullscreen: mediaState ? mediaState.fullscreen : false,      
    }
    this.resolveMessage(message, args)
  }

  protected onCreativeRequestPause(message: Message) {
    this._onPauseMedia() ? this.resolveMessage(message) : this.rejectMessage(message)
  }

  protected onCreativeRequestPlay(message: Message) {
    this._onPlayMedia?.() ? this.resolveMessage(message) : this.rejectMessage(message)
  }

  protected onCreativeRequestResize(message: Message) {
    const args = message.args as CreativeRequestResizeMessageArgs

    if (!this._onResizeSimid(args.creativeDimensions as DOMRect)) {
      this.rejectMessage(message, {
        errorCode : PlayerErrorCode.UNSPECIFIED,
        message: 'Unable to resize a non-linear ad with dimensions bigger than the player'
      } as RejectMessageArgsValue)
    } else {
      this._onResizePlayer(args.mediaDimensions as DOMRect)
      this.resolveMessage(message)
    }
  }

  protected onCreativeRequestSkip(message: Message) {
    this.resolveMessage(message)
    this._skipAd()
  }

  protected onCreativeRequestStop(message: Message) {
    this.resolveMessage(message)
    this._stopAd(StopCode.CREATIVE_INITIATED)
  }
  // #endregion CREATIVE MESSAGE HANDLERS
  // #endregion PROTECTED METHODS

  // #region PRIVATE METHODS
  private async _sendInitMessage() {
    // [4] - send Player:init message

    // Since the creative starts as hidden it will take on the main player/video element dimensions, so tell the ad about those dimensions
    const videoDimensions = this._mainPlayerDimensions
    const creativeDimensions = this._mainPlayerDimensions

    const mediaState = this._onGetMediaState?.()

    const environmentData: EnvironmentData = {
      videoDimensions: videoDimensions,
      creativeDimensions: creativeDimensions,
      fullscreen: false,
      fullscreenAllowed: true,
      variableDurationAllowed: true,
      skippableState: this._adSkippable ? SkippableState.AD_HANDLES : SkippableState.NOT_SKIPPABLE, // This player does not render a skip button.
      version: this._version,
      siteUrl: document.location.host,
      appId: '', // This is not relevant on desktop
      useragent: '', // This should be filled in for sdks and players
      deviceId: '', // This should be filled in on mobile
      muted: mediaState ? mediaState.muted : false,
      volume: mediaState ? mediaState.volume : 1
    }

    const creativeData: CreativeData = {
      adParameters: this._adParameters,
      clickThruUrl: '',
      // These values should be populated from the VAST response
      // adId: '',
      // creativeId : '',
      // adServingId: '',
    }

    const args: PlayerInitMessageArgs = {
      environmentData : environmentData,
      creativeData: creativeData,
    }

    try {
      await this.sendMessage(PlayerMessage.INIT, args)
      this._startCreative()
    } catch (e) {
      console.error('[PLAYER] Init failed', e)
      this._completeAd()
    }
  }

  // #region IFRAME MANAGEMENT
  private _createSimidIframe(): HTMLIFrameElement {

    // Note: once the SIMID iframe is created, it will send a "createSession" message to this SIMID player (see _onCreateSession()) 

    // [2] - create iframe element
    const simidIframe = document.createElement('iframe') as HTMLIFrameElement
    simidIframe.id = 'iframe'
    simidIframe.style.display = 'none'
    simidIframe.style.zIndex = '10'
    simidIframe.style.width = '100%'
    simidIframe.style.height = '100%'
    simidIframe.setAttribute('allowFullScreen', '')
    simidIframe.setAttribute('allow', 'geolocation')

    // Set the iframe creative, this should be an html creative.
    // TODO: This sample does not show what to do when loading fails.
    // [2.1] - set iframe.src
    simidIframe.src = this._creativeUri

    // [2.2] - add do DOM
    // this._appContainerElement.appendChild(simidIframe)
    this._onAddSimid?.(simidIframe)

    // The target of the player to send messages to is the newly created iframe.
    this.setMessageTarget(simidIframe.contentWindow)

    return simidIframe
  }

  private _destroySimidIframe() {
    if (!this._simidIframe) {
      return
    }
    this._simidIframe.remove()
    this._simidIframe = null
  }
  // #endregion IFRAME

  // #region CREATIVE AD MANAGEMENT
  private async _startCreative() {

    const mediaState = this._onGetMediaState?.()
    this._nonLinearStartTime = mediaState?.currentTime

    try {
      await this.sendMessage(PlayerMessage.START_CREATIVE)
      this._onShowSimid?.(true)
      this._startPollingMediaState()
    } catch (e) {
      console.error('[PLAYER] Failed to start creative', e)
    }
  }

  private _stopAd(reason = StopCode.PLAYER_INITATED) {
    if (!this._simidIframe) {
      return
    }
    this._stopSession(false, reason)
  }

  private _skipAd() {
    if (!this._simidIframe) {
      return
    }
    this._stopSession(true)
  }

  private async _stopSession(skipped = false, reason = StopCode.PLAYER_INITATED) {
    if (this._isStopping) {
      return
    }
    this._isStopping = true
    this._stopPollingMediaState()
    // The iframe is only hidden on ad stoppage. The ad might still request tracking pixels before it is cleaned up
    this._onShowSimid?.(false)

    this._completeAd(skipped)

    // Wait for the SIMID creative to acknowledge stop and then clean up the iframe.
    skipped ? 
      await this.sendMessage(PlayerMessage.AD_SKIPPED) :
      await this.sendMessage(PlayerMessage.AD_STOPPED, {
        code: reason
      } as PlayerAdStoppedMessageArgs)
    
    this._destroySimidIframe()
  }

  private _completeAd(skipped = false) {

    // Resize the main player to its original dimensions
    this._onResizePlayer?.(this._mainPlayerDimensions as DOMRect)

    // Notify player ad is complete, if skipped this enable player to seek after the current linear ad
    this._onComplete?.(skipped)

    // Resume main video playback
    this._onPlayMedia?.()
  }  
      
  // #endregion CREATIVE AD MANAGEMENT

  // #region MAIN VIDEO STATE
  private _startPollingMediaState() {
    this._stopPollingMediaState()
    this._intervalMediaState = window.setInterval(() => {
      const mediaState = this._onGetMediaState?.()
      if (mediaState) {
        this._mediaTimeUpdated(mediaState.currentTime)
      }
    }, MEDIA_STATE_POLL_INTERVAL_MS)
  }

  private _stopPollingMediaState() {
    if (this._intervalMediaState === undefined) {
      return
    }
    window.clearInterval(this._intervalMediaState)
    this._intervalMediaState = undefined
  }

  private _mediaTimeUpdated(currentTime: number) {
    // For non-linear ads, stop the ad once requested duration is over
    if (this._requestedDuration > 0 &&
      this._nonLinearStartTime &&
      currentTime - this._nonLinearStartTime > this._requestedDuration) {
      this._nonLinearStartTime = undefined
      this._stopAd(StopCode.NON_LINEAR_DURATION_COMPLETE)
    }
  }
  // #endregion MAIN VIDEO STATE

  // #endregion PRIVATE METHODS
}