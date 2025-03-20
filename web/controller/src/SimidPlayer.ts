import {
  CreativeData,
  CreativeExpandNonLinearResolveMessageArgs,
  CreativeErrorCode,
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
} from '../../../common/Types'
import { SimidComponent } from "../../../common/SimidComponent"

const NO_REQUESTED_DURATION = 0
const UNLIMITED_DURATION = -2

const MEDIA_STATE_POLL_INTERVAL_MS = 500

/** 
 * All the logic for a simple SIMID player
 */
export class SimidPlayer extends SimidComponent {

  // #region MEMBERS
  // A reference to the main application container in which SIMID creative iframe has to be appended.
  private _appContainerElement: HTMLElement

  // A reference to the application container element that contains the main video player
  private _mainPlayerElement: HTMLElement

  // The initial main player container element dimensions.
  private _mainPlayerDimensions: Dimensions | undefined

  // The creative URI
  private _creativeUri: string

  // The ad parameters
  private _adParameters: string

  // A reference to the iframe holding the SIMID creative.
  private _simidIframe: HTMLIFrameElement
  
  // A boolean indicating if current is stopping.
  private _isStopping: boolean

  // A boolean indicating if current ad can be skipped (handled by creative).
  private _adSkippable: boolean

  // A number indicating when the non linear ad started.
  private _nonLinearStartTime: number | undefined

  // The duration requested by the ad.
  private _requestedDuration: number

  // An object containing the resized nonlinear creative's dimensions.
  private _nonLinearDimensions: Dimensions | undefined

  // Callback functions
  private _onGetMediaState: () => MediaState | undefined
  private _onPlayMedia: () => boolean | undefined
  private _onPauseMedia: () => boolean | undefined
  private _onAddSimid: (HTMLIFrameElement) => void | undefined
  private _onShowSimid: (boolean) => void | undefined
  private _onResizePlayer: (DOMRect) => void | undefined
  private _onResizeSimid: (DOMRect) => void | undefined
  private _onComplete: (boolean) => void | undefined

  private _intervalMediaState: number | undefined

  // The unique ID for the interval used to compares the requested change duration and the current ad time.
  private _durationInterval: number
  // #endregion MEMBERS

  /**
   * Sets up the creative iframe and starts listening for messages from the creative.
   * @param appContainerElement The main application container in which SIMID creative iframe has to be appended
   * @param mainPlayerElement The application container element that contains the main video player
   * @param creativeUri The creative URI
   * @param adParameters the creative ad parameters as stringified json
   * @param adDuration the display duration of the creative (0 by default meaning no requested duration)
   * @param adSkippable true if the linear ad is skippable (false by default)
   */
  constructor(
    appContainerElement: HTMLElement,
    mainPlayerElement: HTMLElement,
    creativeUri: string,
    adParameters = '',
    adDuration = NO_REQUESTED_DURATION,
    adSkippable = false) {
    
    super('Player')
    this._addCreativeMessageListeners()

    this._appContainerElement = appContainerElement
    this._mainPlayerElement = mainPlayerElement
    this._mainPlayerDimensions = mainPlayerElement.getBoundingClientRect()

    this._creativeUri = creativeUri
    this._adParameters = adParameters
    this._adSkippable = adSkippable
    this._isStopping = false

    this._simidIframe = undefined
    this._nonLinearStartTime = undefined
    this._requestedDuration = adDuration
    this._nonLinearDimensions = undefined
    this._durationInterval = NaN
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
  public set onPlauseMedia(cb: () => boolean) {
    this._onPauseMedia = cb
  }

  /**
   * Set the callback function called when a new SIMID iframe has to be added in application DOM. 
   */
  public set onAddSimid(cb: (HTMLIFrameElement) => boolean) {
    this._onAddSimid = cb
  }

  /**
   * Set the callback function called when a the SIMID iframe has to be showed of hidden. 
   */
  public set onShowSimid(cb: (boolean) => boolean) {
    this._onShowSimid = cb
  }

  /**
   * Set the callback function called when the media player element has to be resized. 
   */
  public set onResizePlayer(cb: (DOMRect) => boolean) {
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

  protected _addCreativeMessageListeners() {
    this.addMessageListener(ProtocolMessage.CREATE_SESSION, (message: Message) => this.onCreateSession(message))
    this.addMessageListener(CreativeMessage.COLLAPSE_NONLINEAR, (message: Message) => this.onCreativeCollapseNonLinear(message))
    this.addMessageListener(CreativeMessage.EXPAND_NONLINEAR, (message: Message) => this.onCreativeExpandNonLinear(message))
    this.addMessageListener(CreativeMessage.FATAL_ERROR, (message: Message) => this.onCreativeFatalError(message))
    this.addMessageListener(CreativeMessage.GET_MEDIA_STATE, (message: Message) => this.onCreativeGetMediaState(message))
    this.addMessageListener(CreativeMessage.REQUEST_PAUSE, (message: Message) => this.onCreativeRequestPause(message))
    this.addMessageListener(CreativeMessage.REQUEST_PLAY, (message: Message) => this.onCreativeRequestPlay(message))
    this.addMessageListener(CreativeMessage.REQUEST_RESIZE, (message: Message) => this.onCreativeRequestResize(message))
    this.addMessageListener(CreativeMessage.REQUEST_SKIP, (message: Message) => this.onCreativeRequestSkip(message))
    this.addMessageListener(CreativeMessage.REQUEST_STOP, (message: Message) => this.onCreativeRequestStop(message))
  }

  // #region CREATIVE MESSAGE HANDLERS
  protected onCreateSession(message: Message) {
    // [3] - createSession sent by the creative (resolve message done in SimidComponent::_handleProtocolMessage())
    // [4] - send Player:init message
    this._sendInitMessage()
  }

  protected onCreativeCollapseNonLinear(message: Message) {
    const creativeDimensions = this._getNonlinearDimensions()
    if (!this._isValidDimensions(creativeDimensions)) {
      this.rejectMessage(message, {
        errorCode: PlayerErrorCode.UNSPECIFIED,
        message: 'Unable to collapse to dimensions bigger than the player. Please modify dimensions to a smaller size'
      } as RejectMessageArgsValue)
    }

    // In response to collapseNonlinear, the player resizes the ad to its original state and resumes the content media playback.
    this._setSimidIframeDimensions(creativeDimensions)
    this._simidIframe.style.position = "absolute"

    this._onPlayMedia?.()
    this.resolveMessage(message)  
  }

  protected onCreativeExpandNonLinear(message: Message) {
    const fullDimensions = this._getFullDimensions(this._mainPlayerElement)
    this._setSimidIframeDimensions(fullDimensions)
    
    this._onPauseMedia?.()

    const args: CreativeExpandNonLinearResolveMessageArgs = {
      creativeDimensions: fullDimensions
    }
    this.resolveMessage(message, args)
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

  protected onCreativeRequestSkip(message: Message) {
    this.resolveMessage(message)
    this._skipAd()
  }
  
  protected onCreativeRequestStop(message: Message) {
    this.resolveMessage(message)
    this._stopAd(StopCode.CREATIVE_INITIATED)
  }

  protected onCreativeRequestResize(message: Message) {
    const args = message.args as CreativeRequestResizeMessageArgs
    if (!this._isValidDimensions(args.creativeDimensions)) {
      this.rejectMessage(message, {
        errorCode : CreativeErrorCode.EXPAND_NOT_POSSIBLE,
        message: 'Unable to resize a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.'
      } as RejectMessageArgsValue)
    } else {
      this._nonLinearDimensions = args.creativeDimensions
      this._setSimidIframeDimensions(args.creativeDimensions)
      this._setElementDimensions(this._mainPlayerElement, args.mediaDimensions)
      this.resolveMessage(message)
    }
  }
  // #endregion CREATIVE MESSAGE HANDLERS

  // #region PRIVATE METHODS
  private async _sendInitMessage() {
    // [4] - send Player:init message
    const videoDimensions = this._getFullDimensions(this._mainPlayerElement)
    // Since the creative starts as hidden it will take on the main player/video element dimensions, so tell the ad about those dimensions.
    const creativeDimensions = this._getNonlinearDimensions()

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
      this._resetSession()
    }
  }

  /**
   * Stop/reset session
   * Remove and destroy the SIMID creative iframe and resumes video playback.
   */
  private _resetSession(skipped = false) {
    this._setElementDimensions(this._mainPlayerElement, this._mainPlayerDimensions)
    this._onComplete?.(skipped)
    this._onPlayMedia?.()
  }  

  // #region IFRAME MANAGEMENT
  private _createSimidIframe(): HTMLIFrameElement {

    // Note: once the SIMID iframe is created, it will send a "createSession" message to this SIMID player (see _onCreateSession()) 

    // [2] - create iframe element
    const simidIframe = document.createElement('iframe') as HTMLIFrameElement
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
    this._appContainerElement.appendChild(simidIframe)
    // this._onAddSimid?.(simidIframe)

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

  private _showSimidIFrame() {
    if (!this._simidIframe) {
      return
    }
    this._simidIframe.style.display = 'block'
  }

  private _hideSimidIFrame() {
    if (!this._simidIframe) {
      return
    }
    this._simidIframe.style.display = 'none'
    this._onShowSimid?.(false)
  }

  private _setSimidIframeDimensions(dimensions: Dimensions) {
    if (!this._simidIframe) {
      return
    }
    this._setElementDimensions(this._simidIframe, dimensions)
  }  
  // #endregion IFRAME

  // #region AD PLAYBACK
  private async _startCreative() {

    const mediaState = this._onGetMediaState?.()
    this._nonLinearStartTime = mediaState?.currentTime

    try {
      await this.sendMessage(PlayerMessage.START_CREATIVE)
      this._showSimidIFrame()
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
    // The iframe is only hidden on ad stoppage. The ad might still request tracking pixels before it is cleaned up.
    this._hideSimidIFrame()
    this._resetSession(skipped)

    // Wait for the SIMID creative to acknowledge stop and then clean up the iframe.
    skipped ? 
      await this.sendMessage(PlayerMessage.AD_SKIPPED) :
      await this.sendMessage(PlayerMessage.AD_STOPPED, {
        code: reason
      } as PlayerAdStoppedMessageArgs)
    this._destroySimidIframe()
  }
  
  // #endregion AD PLAYBACK

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

  private _getFullDimensions(element: Element): Dimensions {
    const videoRect = element.getBoundingClientRect()
    return {
      x : 0,
      y : 0,
      width : videoRect.width,
      height : videoRect.height,
    }
  }

  /**
   * Checks whether the input dimensions are valid and fit in the player window.
   * @param dimensions A dimension that contains x, y, width & height fields.
   * @return true if the input dimensions are valid and fit in the player window
   */
  private _isValidDimensions(dimensions: Dimensions): boolean {
    const playerRect = this._mainPlayerElement.getBoundingClientRect()

    const heightFits = dimensions.y + dimensions.height <= playerRect.height
    const widthFits = dimensions.x + dimensions.width <= playerRect.width
    
    return heightFits && widthFits
  }

  /**
   * Returns the specified dimensions of the non-linear creative.
   * @return the dimensions of the non-linear creative
   */
  private _getNonlinearDimensions(): Dimensions {
    if (this._nonLinearDimensions) {
      return this._nonLinearDimensions
    }

    // Take player container dimensions as initial creative dimensions
    return this._getFullDimensions(this._mainPlayerElement)
  }

  private _setElementDimensions(element: HTMLElement, dimensions: Dimensions) {
    this.log(`[SIMID][Player] Resize ${element.localName} x:${dimensions.x} y:${dimensions.y} w:${dimensions.width} h:${dimensions.height}`)
    element.style.height = `${dimensions.height}`
    element.style.width = `${dimensions.width}`
    element.style.left = `${dimensions.x}`
    element.style.top = `${dimensions.y}`
  }
}