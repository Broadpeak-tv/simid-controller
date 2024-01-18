import { 
  CreativeData,
  CreativeGetMediaStateMessageArgs,
  CreativeMessage,
  EnvironmentData,
  MediaMessage,
  MediaTimeUpdateMessageArgs,
  MediaVolumeChangeMessageArgs,
  Message,
  MessagesWithResponse,
  PlayerMessage,
  PlayerInitMessageArgs,
  PlayerResizeMessageArgs,
  ProtocolMessage,
  Dimensions,
  CreativeRequestResizeMessageArgs
} from './Types'
import { SimidComponent } from "./SimidComponent"

/*
* A subclass of a SIMID ad that implements functionality that will be the same for all simid ads.
*/
export class SimidCreative extends SimidComponent {

  // #region MEMBERS
  // The SIMID version, once the player makes it known.
  protected simidVersion: string

  // The session environment data
  protected environmentData: EnvironmentData

  // The creative data
  protected creativeData: CreativeData

  // The video state
  protected videoState: CreativeGetMediaStateMessageArgs

  // #endregion MEMBERS

  constructor() {
    super('Creative')
    this.simidVersion = ''
    this._addMessageListeners()
  }
 
  /**
   * Creates a new session.
   * This message is sent by the Creative to initialize the session.
   * @param sessionId
   */
  public createSession(sessionId?: string) {
    this._sessionId = sessionId || this._generateSessionId()
    this.sendMessage(ProtocolMessage.CREATE_SESSION).then(() => {
      console.log('Session created.')
    }, () => {
      // If this ever happens, it may be impossible for the ad to ever communicate with the player.
      console.log('Session creation was rejected.')
    })
  }

  private _addMessageListeners() {
    Object.values(PlayerMessage).forEach(value => {
      this.addMessageListener(value, (message: Message) => this.onPlayerMessage(message))
    })

    Object.values(MediaMessage).forEach(value => {
      this.addMessageListener(value, (message: Message) => this.onMediaMessage(message))
    })
  }

  // #region PROTECTED METHODS
  protected onPlayerMessage(message: Message) {
    let rejectArgs = undefined
    switch(message.type) {
    case PlayerMessage.AD_STOPPED:
      break
    case PlayerMessage.AD_SKIPPED:
      break
    case PlayerMessage.FATAL_ERROR:
      break
    case PlayerMessage.INIT:
      rejectArgs = this._onPlayerInit(message)
      break
    case PlayerMessage.KEY_DOWN:
      this.onPlayerKeyDown(message)
      break
    case PlayerMessage.LOG:
      break
    case PlayerMessage.RESIZE:
      rejectArgs = this._onPlayerResize(message)
      break
    case PlayerMessage.START_CREATIVE:
      break
    default:
      break
    }
    if (MessagesWithResponse.includes(message.type)) {
      if (rejectArgs) {
        this.rejectMessage(message, rejectArgs)
      } else {
        this.resolveMessage(message)
      }
    }
  }

  protected onMediaMessage(message: Message) {
    switch(message.type) {
    case MediaMessage.DURATION_CHANGE:
      break
    case MediaMessage.ENDED:
      this.videoState.ended = true
      break
    case MediaMessage.ERROR:
      break
    case MediaMessage.PAUSE:
      this.videoState.paused = true
      break
    case MediaMessage.PLAY:
      this.videoState.paused = false
      break
    case MediaMessage.PLAYING:
      this.videoState.paused = false
      break
    case MediaMessage.SEEKED:
      break
    case MediaMessage.SEEKING:
      break
    case MediaMessage.STALLED:
      break
    case MediaMessage.TIME_UPDATE:
      this.videoState.currentTime = (message.args as MediaTimeUpdateMessageArgs).currentTime
      break
    case MediaMessage.VOLUME_CHANGE:
      const args: MediaVolumeChangeMessageArgs = message.args as MediaVolumeChangeMessageArgs
      this.videoState.volume = args.volume
      this.videoState.muted = args.muted
      break
    default:
      break
    }
  }

  // Creatives can override these methods to add message handler
  // Note: Creatives source code can be written in javascript, in which methods inheritance is not supported
  protected onPlayerInit(message: Message): any {
    return undefined
  }

  protected onPlayerKeyDown(message: Message): any {
    return undefined
  }

  protected onPlayerResize(message: Message): any {
    return undefined
  }

  protected async sendRequestResize(mediaDimensions: Dimensions, creativeDimensions: Dimensions) {
    try {
      await this.sendMessage(CreativeMessage.REQUEST_RESIZE, {
        mediaDimensions,
        creativeDimensions
      } as CreativeRequestResizeMessageArgs)
      this.environmentData.videoDimensions = mediaDimensions;
      this.environmentData.creativeDimensions = creativeDimensions;
    } catch (e) {}
  }
  // #endregion PROTECTED METHODS

  // #region PRIVATE METHODS
  private _onPlayerInit(message: Message): any {
    const args = message.args as PlayerInitMessageArgs
    this.environmentData = args.environmentData
    this.creativeData = args.creativeData
    return this.onPlayerInit(message)
  }

  private _onPlayerResize(message: Message): any {
    const args = message.args as PlayerResizeMessageArgs
    this.environmentData.creativeDimensions = args.creativeDimensions
    this.environmentData.videoDimensions = args.videoDimensions
    this.environmentData.fullscreen = args.fullscreen
    return this.onPlayerResize(message)
  }

  /**
   * Sets the session ID, this should only be used on session creation.
   * @private
   */
  private _generateSessionId(): string {
    // This function generates a random v4 UUID. In a v4 UUID, of the format
    // xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx, all bits are selected randomly,
    // except the bits of 'M', which must be equal to 4, and 'N', whose first 2
    // most significant bits must be set to 10b. So in total only 122 of the 128
    // bits are random. See
    // https://en.wikipedia.org/wiki/Universally_unique_identifier for more.

    // crypto.getRandomValues is preferred over crypto.randomUUID since it
    // supports much older browsers including IE, and doesn't require a secure
    // context.

    // Create 128 random bits (8-bit * 16).
    const random16Uint8s = new Uint8Array(16)
    window.crypto.getRandomValues(random16Uint8s)
    // Split each 8-bit int into two 4-bit ints (4-bit * 32).
    const random32Uint4s = Array.from(Array(32).keys()).map(index => {
      const isEven = index % 2 == 0
      const randomUint8 = random16Uint8s[Math.floor(index/2)]
      // Pick the high 4 bits for even indices, the low 4 bits for odd.
      return isEven ? (randomUint8 >> 4) : (randomUint8 & 15)
    })

    // Fix the 12th digit to 4 for the UUID version.
    random32Uint4s[12] = 4
    // Fix the 16th digit's 2 high bits to 10b for UUID variant 1.
    random32Uint4s[16] = 0b1000 | (random32Uint4s[16] & 0b0011)

    const hexDigits = random32Uint4s.map(v => v.toString(16))
    const uuidComponents = [
      hexDigits.slice(0, 8).join(''),
      hexDigits.slice(8, 12).join(''),
      hexDigits.slice(12, 16).join(''),
      hexDigits.slice(16, 20).join(''),
      hexDigits.slice(20).join(''),
    ]
    const uuid = uuidComponents.join('-')
    return uuid
  }
  // #endregion PRIVATE METHODS
}
 