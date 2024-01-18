import {
  CreativeData,
  CreativeExpandNonLinearResolveMessageArgs,
  CreativeErrorCode,
  CreativeGetMediaStateMessageArgs,
  CreativeMessage,
  Dimensions,
  EnvironmentData,
  LogMessageArgs,
  MediaDurationChangeMessageArgs,
  MediaErrorMessageArgs,
  MediaMessage,
  MediaTimeUpdateMessageArgs,
  MediaVolumeChangeMessageArgs,
  Message,
  PlayerAdStoppedMessageArgs,
  PlayerErrorCode,
  PlayerInitMessageArgs,
  PlayerMessage,
  ProtocolMessage,
  RejectMessageArgsValue,
  SkippableState,
  StopCode,
  VideoEvent,
  CreativeRequestResizeMessageArgs,
  PlayerKeyDownMessageArgs,
} from './Types'
import { SimidComponent } from "./SimidComponent"

const NO_REQUESTED_DURATION = 0
const UNLIMITED_DURATION = -2

/** DISABLED and ENABLED constants are used to control the state of buttons. */
const DISABLED = true
const ENABLED = false


// interface HTMLElement {
//   requestFullscreen?: () => Promise<void>
//   msRequestFullscreen?: () => Promise<void>
//   webkitRequestFullscreen?: () => Promise<void>
//   mozRequestFullScreen?: () => Promise<void>
// }

/** 
 * All the logic for a simple SIMID player
 */
export class SimidPlayer extends SimidComponent {

  // #region MEMBERS
  // A reference to the video player on the players main page.
  private _mainVideoElement: HTMLMediaElement

  // The initial main video element dimensions.
  private _mainVideoDimensions: Dimensions | undefined

  // A reference to the main player container on the players main page.
  private _playerContainerElement: HTMLDivElement

  // A reference to a video player for playing ads.
  private _adVideoElement: HTMLMediaElement

  // The creative URI
  private _creativeUri: string

  // The ad parameters
  private _adParams: string

  // A reference to the iframe holding the SIMID creative.
  private _simidIframe: HTMLIFrameElement
  
  // A boolean indicating what type of creative ad is.
  private _isLinearAd: boolean
  
  // Callback function to execute on ad completion.
  private _adComplete: () => void

  // A number indicating when the non linear ad started.
  private _nonLinearStartTime: number | undefined

  // The duration requested by the ad.
  private _requestedDuration: number

  // An object containing the resized nonlinear creative's dimensions.
  private _nonLinearDimensions: Dimensions | undefined
  
  // The unique ID for the interval used to compares the requested change duration and the current ad time.
  private _durationInterval: number
  // #endregion MEMBERS

  /**
   * Sets up the creative iframe and starts listening for messages from the creative.
   * @param mainVideo The main video element
   * @param isLinearAd Represents if the ad is a linear one.
   * @param adComplete This function gets called when the ad stops.
   */
  constructor(mainVideo: HTMLMediaElement, creativeUri: string, isLinearAd: boolean, adComplete = () => {}, adParams = '', adDuration = NO_REQUESTED_DURATION) {
    super('Player')
    this._addCreativeMessageListeners()

    this._mainVideoElement = mainVideo
    this._mainVideoDimensions = mainVideo.getBoundingClientRect()
    this._creativeUri = creativeUri
    this._adParams = adParams
    this._isLinearAd = isLinearAd
    this._adComplete = adComplete

    // Consider main video element parent as container element for iframe and ad video player
    this._playerContainerElement = this._mainVideoElement.parentElement as HTMLDivElement

    this._adVideoElement = undefined//document.getElementById('ad_video_player') as HTMLMediaElement
    this._simidIframe = undefined
    this._nonLinearStartTime = undefined
    this._requestedDuration = adDuration
    this._nonLinearDimensions = undefined
    this._durationInterval = NaN

    this._addMainVideoEventListeners()
    this._hideAdPlayer()

    document.addEventListener('keydown', (e: Event) => this._onKeyDown(e as KeyboardEvent))
  }

  /**
   * Initialize and load ad. This should be called before an ad plays.
   * Creates an iframe with the creative in it, then uses a promise to call init on the creative as soon as the creative initializes a session.
   */
  public load() {
    // if (!this._isLinearAd && !this._isValidDimensions(this._getNonlinearDimensions())) {
    //   console.log('Unable to play a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.')
    //   return
    // }

    // After the iframe is created the player will wait until the ad initializes the communication channel.
    // Then it will call sendInitMessage.

    // [2] - Create iframe element
    this._simidIframe = this._createSimidIframe()

    // if (!this._isLinearAd) {
    //   this._displayNonlinearCreative()
    // }
  }

  public reset() {
    this._stopAd()
  }

  private _addCreativeMessageListeners() {
    this.addMessageListener(ProtocolMessage.CREATE_SESSION, (message: Message) => this.onCreateSession(message))
    this.addMessageListener(CreativeMessage.COLLAPSE_NONLINEAR, (message: Message) => this.onCreativeCollapseNonLinear(message))
    this.addMessageListener(CreativeMessage.EXPAND_NONLINEAR, (message: Message) => this.onCreativeExpandNonLinear(message))
    this.addMessageListener(CreativeMessage.FATAL_ERROR, (message: Message) => this.onCreativeFatalError(message))
    this.addMessageListener(CreativeMessage.GET_MEDIA_STATE, (message: Message) => this.onCreativeGetMediaState(message))
    // this.addMessageListener(CreativeMessage.LOG, this.onReceiveCreativeLog.bind(this))
    // this.addMessageListener(CreativeMessage.REQUEST_CHANGE_AD_DURATION, this.onRequestChangeAdDuration.bind(this))
    // this.addMessageListener(CreativeMessage.REQUEST_FULL_SCREEN, this.onRequestFullScreen.bind(this))
    // this.addMessageListener(CreativeMessage.REQUEST_PLAY, this.onRequestPlay.bind(this))
    // this.addMessageListener(CreativeMessage.REQUEST_PAUSE, this.onRequestPause.bind(this))
    this.addMessageListener(CreativeMessage.REQUEST_RESIZE, (message: Message) => this.onCreativeRequestResize(message))
    this.addMessageListener(CreativeMessage.REQUEST_SKIP, (message: Message) => this.onCreativeRequestSkip(message))
    this.addMessageListener(CreativeMessage.REQUEST_STOP, (message: Message) => this.onCreativeRequestStop(message))
  }

  // #region CREATIVE MESSAGE HANDLERS
  protected onCreateSession(message: Message) {
    // [3] - createSession sent by the creative
    this.resolveMessage(message)
    // [4] - send Player:init message
    this._sendInitMessage()
  }

  protected onCreativeCollapseNonLinear(message: Message) {
    if (this._isLinearAd) {
      this.rejectMessage(message, {
        errorCode: PlayerErrorCode.UNSPECIFIED,
        message: 'Cannot collapse linear ads'
      } as RejectMessageArgsValue)
      return
    }

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

    this._mainVideoElement.play()
    this.resolveMessage(message)  
  }

  protected onCreativeExpandNonLinear(message: Message) {
    if (this._isLinearAd) {
      this.rejectMessage(message)
      return
    }
    const fullDimensions = this._getFullDimensions(this._mainVideoElement)
    this._setSimidIframeDimensions(fullDimensions)
    
    this._mainVideoElement.pause()

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
    const args: CreativeGetMediaStateMessageArgs = {
      currentSrc: this._adVideoElement ? this._adVideoElement.currentSrc : '',
      currentTime: this._adVideoElement ? this._adVideoElement.currentTime : 0,
      duration: this._adVideoElement ? this._adVideoElement.duration : 0,
      ended: this._adVideoElement ? this._adVideoElement.ended : true,
      muted: this._adVideoElement ? this._adVideoElement.muted : false,
      paused: this._adVideoElement ? this._adVideoElement.paused : true,
      volume: this._adVideoElement ? this._adVideoElement.volume : 0,
      fullscreen: this._adVideoElement ? this._adVideoElement['fullscreen'] : false,      
    }
    this.resolveMessage(message, args)
  }

  // onReceiveCreativeLog(incomingMessage) {
  //   const logMessage = incomingMessage.args['message']
  //   console.log("Received message from creative: " + logMessage)
  // }
  
  // /**
  //  * The player must implement sending tracking pixels from the creative.
  //  * This sample implementation does not show how to send tracking pixels or
  //  * replace macros. That should be done using the players standard workflow.
  //  */
  // onReportTracking(incomingMessage) {
  //   const requestedUrlArray = incomingMessage.args['trackingUrls']
  //   console.log('The creative has asked for the player to ping ' + requestedUrlArray)
  // }

  // /**
  //  * Called when creative requests a change in duration of ad.
  //  * @private
  //  */
  // onRequestChangeAdDuration(incomingMessage) {
  //   const newRequestedDuration = incomingMessage.args['duration']
  //   if (newRequestedDuration != UNLIMITED_DURATION && newRequestedDuration < 0) {
  //     const durationErrorMessage = {
  //       errorCode: PlayerErrorCode.UNSUPPORTED_TIME,
  //       message: 'A negative duration is not valid.'
  //     }
  //     this.rejectMessage(incomingMessage, durationErrorMessage)
  //   }
  //   else {
  //     this._requestedDuration = newRequestedDuration
  //     //If requested duration is any other acceptable value
  //     this.compareAdAndRequestedDurations_()
  //     this.resolveMessage(incomingMessage)
  //   }
  // }

  // public onRequestFullScreen(incomingMessage) {

  //   const element = this._simidIframe as HTMLElement
  //   var requestFullScreen =
  //     element.requestFullscreen ||
  //     element.webkitRequestFullscreen ||
  //     element.mozRequestFullScreen ||
  //     element.msRequestFullscreen
    
  //   // The spec currently says to only request fullscreen for the iframe.
  //   const promise: Promise<void> = requestFullScreen()

  //   if (promise) {
  //     promise.then(() => this.resolveMessage(incomingMessage))
  //   } else {
  //     // TODO: Many browsers are not returning promises but are still
  //     // going full screen. Assuming resolve (bad).
  //     this.resolveMessage(incomingMessage)
  //   }
  // }

  // onRequestPlay(incomingMessage) {
    
  //   if (this._isLinearAd) {
  //     this._adVideoElement.play()
  //     .then(() => this.resolveMessage(incomingMessage))
  //     .catch(() => {
  //       const errorMessage = {
  //         errorCode : PlayerErrorCode.VIDEO_COULD_NOT_LOAD,
  //         message: 'The SIMID media could not be loaded.'
  //       }
  //       this.rejectMessage(incomingMessage, errorMessage)
  //     })
  //   } else {
  //     const errorMessage = {
  //       errorCode : CreativeErrorCode.PLAYBACK_AREA_UNUSABLE,
  //       message: 'Non linear ads do not play video.'
  //     }
  //     this.rejectMessage(incomingMessage, errorMessage)
  //   }
  // }
  
  // onRequestPause(incomingMessage) {
  //   this._adVideoElement.pause()
  //   this.resolveMessage(incomingMessage)
  // }

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
    if (this._isLinearAd) {
      this.rejectMessage(message, {
        errorCode : CreativeErrorCode.EXPAND_NOT_POSSIBLE,
        message: 'Linear resize not yet supported.'
      } as RejectMessageArgsValue)    
    } else if (!this._isValidDimensions(args.creativeDimensions)) {
      this.rejectMessage(message, {
        errorCode : CreativeErrorCode.EXPAND_NOT_POSSIBLE,
        message: 'Unable to resize a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.'
      } as RejectMessageArgsValue)
    } else {
      this._nonLinearDimensions = args.creativeDimensions
      this._setSimidIframeDimensions(args.creativeDimensions)
      this._setElementDimensions(this._mainVideoElement, args.mediaDimensions)
      this.resolveMessage(message)
    }
  }
  // #endregion CREATIVE MESSAGE HANDLERS

  // #region PRIVATE METHODS
  private async _sendInitMessage() {
    // [4] - send Player:init message
    const videoDimensions = this._getFullDimensions(this._mainVideoElement)
    // Since the creative starts as hidden it will take on the video element dimensions, so tell the ad about those dimensions.
    const creativeDimensions = this._isLinearAd ?
      this._getFullDimensions(this._mainVideoElement) : 
      this._getNonlinearDimensions()

    const environmentData: EnvironmentData = {
      videoDimensions: videoDimensions,
      creativeDimensions: creativeDimensions,
      fullscreen: false,
      fullscreenAllowed: true,
      variableDurationAllowed: true,
      skippableState: SkippableState.AD_HANDLES, // This player does not render a skip button.
      version: '',
      siteUrl: document.location.host,
      appId: '', // This is not relevant on desktop
      useragent: '', // This should be filled in for sdks and players
      deviceId: '', // This should be filled in on mobile
      muted: this._adVideoElement ? this._adVideoElement.muted : false,
      volume: this._adVideoElement ? this._adVideoElement.volume : 1
    }

    const creativeData: CreativeData = {
      adParameters: this._adParams,
      clickThruUrl: '',
      // These values should be populated from the VAST response
      // adId: '',
      // creativeId : '',
      // adServingId: '',
    }

    // if (!this._isLinearAd) {
    //   creativeData.duration = (document.getElementById('duration') as HTMLTextAreaElement).value
    // }

    const args: PlayerInitMessageArgs = {
      environmentData : environmentData,
      creativeData: creativeData,
    }

    try {
      await this.sendMessage(PlayerMessage.INIT, args)
      this._startCreative()
    } catch (e) {
      console.error('[PLAYER] Init failed', e)
      this._stopSession()
    }
  }

  /**
   * Stop/reset session
   * Remove and destroy the SIMID creative iframe and resumes video playback.
   */
  private _stopSession() {
    this._stopAdPlayer()
    this._hideAdPlayer()
    this._destroySimidIframe()
    this._setElementDimensions(this._mainVideoElement, this._mainVideoDimensions)
    this._removeAdVideoEventListeners()
    this._removeMainVideoEventListeners()
    this._adComplete()
    this._mainVideoElement.play()
  }  

  // #region IFRAME MANAGEMENT
  private _createSimidIframe(): HTMLIFrameElement {

    // Note: once the SIMID iframe is created, it will send a "createSession" message to this SIMId player (see _onCreateSession()) 

    // [2] - create iframe element
    const simidIframe = document.createElement('iframe') as HTMLIFrameElement
    simidIframe.style.display = 'none'
    simidIframe.setAttribute('allowFullScreen', '')
    simidIframe.setAttribute('allow', 'geolocation')

    if (this._isLinearAd) {
      // TODO: Set up css to overlay the SIMID iframe over the entire video creative only if linear.
      // Non-linear ads will have dimension inputs for placement
      // simidIframe.classList.add('linear_simid_creative')
    }
    
    // Set the iframe creative, this should be an html creative.
    // TODO: This sample does not show what to do when loading fails.
    // [2.1] - set iframe.src
    simidIframe.src = this._creativeUri

    simidIframe.onfocus = () => {
      this._playerContainerElement.focus()
    }

    // [2.2] - add do DOM
    this._playerContainerElement.appendChild(simidIframe)

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
    this.reset()
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

    if (this._isLinearAd) {
      this._playLinearVideoAd()
    } else {
      this._nonLinearStartTime = this._mainVideoElement.currentTime
      this._mainVideoElement.play()
    }

    try {
      await this.sendMessage(PlayerMessage.START_CREATIVE)
      this._showSimidIFrame()
    } catch (e) {
      console.error('[PLAYER] Failed to start creative', e)
    }
  }

  /**
   * Stops the ad and destroys the ad iframe.
   * @param reason The reason the ad will stop.
   */
  private async _stopAd(reason = StopCode.PLAYER_INITATED) {
    // The iframe is only hidden on ad stoppage. The ad might still request tracking pixels before it is cleaned up.
    if (this._simidIframe) {
      this._hideSimidIFrame()
      // Wait for the SIMID creative to acknowledge stop and then clean up the iframe.
      await this.sendMessage(PlayerMessage.AD_STOPPED, {
        code: reason
      } as PlayerAdStoppedMessageArgs)
      this._stopSession()
    }
  }

  private async _skipAd() {
    // The iframe is only hidden on ad skipped. The ad might still request tracking pixels before it is cleaned up.
    this._hideSimidIFrame()
    // Wait for the SIMID creative to acknowledge skip and then clean up the iframe.
    await this.sendMessage(PlayerMessage.AD_SKIPPED)
    this._stopSession()
  }
  
  private _playLinearVideoAd() {
    if (!this._adVideoElement) {
      return
    }
    this._mainVideoElement.pause()
    this._showAdPlayer()
    this._loadAdPlayer()
  }

  private _loadAdPlayer() {
    if (!this._adVideoElement) {
      return
    }
    this._adVideoElement.src = (document.getElementById('video_url') as HTMLTextAreaElement).value
    this._adVideoElement.play()
  }

  private _pauseAdPlayer() {
    if (!this._adVideoElement) {
      return
    }
    this._adVideoElement.pause()
  }

  private _playAdPlayer() {
    if (!this._adVideoElement) {
      return
    }
    this._adVideoElement.play()
  }

  private _stopAdPlayer() {
    if (!this._adVideoElement) {
      return
    }
    this._adVideoElement.src = ''
  }

  private _showAdPlayer() {
    if (!this._adVideoElement) {
      return
    }
    this._adVideoElement.style.display = 'block'
    // document.getElementById('ad_video_div').style.display = 'block'
  }

  private _hideAdPlayer() {
    if (!this._adVideoElement) {
      return
    }
    this._adVideoElement.style.display = 'none'
    // document.getElementById('ad_video_div').style.display = 'none'
  }
  // #endregion AD PLAYBACK

  // #region AD VIDEO EVENTS
  private _addAdVideoEventListeners() {
    if (!this._adVideoElement) {
      return
    }
    Object.values(VideoEvent).forEach(value => {
      this._adVideoElement.addEventListener(value, (event: Event) => this._onAdVideoEvent(event), true)
    })
  }

  private _removeAdVideoEventListeners() {
    if (!this._adVideoElement) {
      return
    }
    Object.values(VideoEvent).forEach(value => {
      this._adVideoElement.removeEventListener(value, (event: Event) => this._onAdVideoEvent(event), true)
    })
  }

  private _onAdVideoEvent(event: Event) {
    console.log('[PLAYER] Ad video event:', event.type)
    switch(event.type) {
    case VideoEvent.DURATION_CHANGE:
      this.sendMessage(MediaMessage.DURATION_CHANGE, {
        duration: this._adVideoElement.duration
      } as MediaDurationChangeMessageArgs)
      break
    case VideoEvent.ENDED:
      this._onAdVideoEnded()
      break
    case VideoEvent.ERROR:
      const errorEvent = event as ErrorEvent
      this.sendMessage(MediaMessage.ERROR, {
        error: errorEvent.error,
        message: errorEvent.message
      } as MediaErrorMessageArgs)
      break
    case VideoEvent.TIME_UPDATE:
      this.sendMessage(MediaMessage.TIME_UPDATE, {
        currentTime: this._adVideoElement.currentTime
      } as MediaTimeUpdateMessageArgs)
      break
    case VideoEvent.VOLUME_CHANGE:
      this.sendMessage(MediaMessage.VOLUME_CHANGE, {
        muted: this._adVideoElement.muted,
        volume: this._adVideoElement.volume
      } as MediaVolumeChangeMessageArgs)
      break
    default:
      // By default, simply forward event message by prepending 'Media:' to the event type/name 
      this.sendMessage('Media:' + event.type)
      break
    }
  }

  private _onAdVideoEnded() {
    this.sendMessage(MediaMessage.ENDED)

    if (this._requestedDuration === NO_REQUESTED_DURATION) {
      this._stopAd(StopCode.MEDIA_PLAYBACK_COMPLETE)
    } else if (this._requestedDuration != UNLIMITED_DURATION) {
      // If the request duration is longer than the ad duration, the ad extends for the requested amount of time
      const durationChangeMs = (this._requestedDuration - this._adVideoElement.duration) * 1000
      setTimeout(() => {
        this._stopAd(StopCode.CREATIVE_INITIATED)
      }, durationChangeMs)
    }
  }
  // #endregion AD VIDEO EVENTS

  // #region MAIN VIDEO EVENTS
  private _addMainVideoEventListeners() {
    Object.values(VideoEvent).forEach(value => {
      this._mainVideoElement.addEventListener(value, (event: Event) => this._onMainVideoEvent(event), true)
    })
  }

  private _removeMainVideoEventListeners() {
    Object.values(VideoEvent).forEach(value => {
      this._mainVideoElement.removeEventListener(value, (event: Event) => this._onMainVideoEvent(event), true)
    })
  }
  
  private _onMainVideoEvent(event: Event) {
    console.log('[PLAYER] Main video event:', event.type)
    switch(event.type) {
    case VideoEvent.TIME_UPDATE:
      // For non-linear ads, stop the ad once requested duration is over
      if (this._nonLinearStartTime && this._mainVideoElement.currentTime - this._nonLinearStartTime > this._requestedDuration) {
        this._stopAd(StopCode.NON_LINEAR_DURATION_COMPLETE)
      }
      break
    default:
      break
    }
  }
  // #endregion MAIN VIDEO EVENTS

  private _onKeyDown(event: KeyboardEvent) {
    console.log('### KEY_DOWN', event)
    this.sendMessage(PlayerMessage.KEY_DOWN, {
      key: event.key,
      code: event.keyCode
    } as PlayerKeyDownMessageArgs)
    event.preventDefault()
  }

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
    const playerRect = this._playerContainerElement.getBoundingClientRect()

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

    // Take player contaier dimensions as initial creative dimensions
    return this._getFullDimensions(this._playerContainerElement)
  }

  private _displayNonlinearCreative() {
    const newDimensions = this._getNonlinearDimensions()
    
    if (!this._isValidDimensions(newDimensions)) {
      console.log('Unable to play a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.')
      return
    } else {
      this._setSimidIframeDimensions(newDimensions)
      this._simidIframe.style.position = "absolute"

      this._mainVideoElement.play()

      // TODO: get creative duration
      this._requestedDuration = 10
    }
  }

  private _setElementDimensions(element: HTMLElement, dimensions: Dimensions) {
    element.style.height = `${dimensions.height}`
    element.style.width = `${dimensions.width}`
    element.style.left = `${dimensions.x}px`
    element.style.top = `${dimensions.y}px`
  }

  // /**
  //  * Compares the duration of the ad with the requested change duration.
  //  * If request duration is the same as the ad duration, ad ends as normal.
  //  * If request duration is unlimited, ad stays on screen until user closes ad.
  //  * If request duration is shorter, the ad stops early. 
  //  * @private
  //  */
  // compareAdAndRequestedDurations_() {
  //   if (this._requestedDuration == NO_REQUESTED_DURATION ||  this._requestedDuration == UNLIMITED_DURATION) {
  //     //Note: Users can end the ad with unlimited duration with
  //     // the close ad button on the player
  //     return
  //   } else if (this._adVideoElement.currentTime >= this._requestedDuration) {
  //     //Creative requested a duration shorter than the ad
  //     this.stopAd(StopCode.CREATIVE_INITIATED)
  //   }
  // } 

  private _sendLog(message: string) {
    this.sendMessage(PlayerMessage.LOG, {
      message
    } as LogMessageArgs)
  }
}