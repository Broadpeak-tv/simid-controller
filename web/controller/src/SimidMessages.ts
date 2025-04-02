
export const ProtocolMessage = {
  CREATE_SESSION: 'createSession',
  RESOLVE: 'resolve',
  REJECT: 'reject'
}

export const MediaMessage = {
  DURATION_CHANGE: 'Media:durationchange',
  ENDED: 'Media:ended',
  ERROR: 'Media:error',
  PAUSE: 'Media:pause',
  PLAY: 'Media:play',
  PLAYING: 'Media:playing',
  SEEKED: 'Media:seeked',
  SEEKING: 'Media:seeking',
  STALLED: 'Media:stalled',
  TIME_UPDATE: 'Media:timeupdate',
  VOLUME_CHANGE: 'Media:volumechange',
}

export const PlayerMessage = {
  AD_SKIPPED: 'Player:adSkipped',
  AD_STOPPED: 'Player:adStopped',
  FATAL_ERROR: 'Player:fatalError',
  INIT: 'Player:init',
  // BPK
  KEY_DOWN: 'Player:keyDown',
  LOG: 'Player:log',
  RESIZE: 'Player:resize',
  START_CREATIVE: 'Player:startCreative',
}

export const VideoEvent = {
  DURATION_CHANGE: 'durationchange',
  ENDED: 'ended',
  ERROR: 'error',
  PAUSE: 'pause',
  PLAY: 'play',
  PLAYING: 'playing',
  SEEKED: 'seeked',
  SEEKING: 'seeking',
  STALLED: 'stalled',
  TIME_UPDATE: 'timeupdate',
  VOLUME_CHANGE: 'volumechange',
}

/** Messages from the creative */
export const CreativeMessage = {
  CLICK_THRU: 'Creative:clickThru',
  EXPAND_NONLINEAR: 'Creative:expandNonlinear',
  COLLAPSE_NONLINEAR: 'Creative:collapseNonlinear',
  FATAL_ERROR: 'Creative:fatalError',
  GET_MEDIA_STATE: 'Creative:getMediaState',
  LOG: 'Creative:log',
  READY: 'Creative:Ready',
  REPORT_TRACKING: 'Creative:reportTracking',
  REQUEST_FULL_SCREEN: 'Creative:requestFullScreen',
  REQUEST_SKIP: 'Creative:requestSkip',
  REQUEST_STOP: 'Creative:requestStop',
  REQUEST_PAUSE: 'Creative:requestPause',
  REQUEST_PLAY: 'Creative:requestPlay',
  REQUEST_RESIZE: 'Creative:requestResize',
  REQUEST_VOLUME: 'Creative:requestVolume',
  REQUEST_TRACKING: 'Creative:reportTracking',
  REQUEST_CHANGE_AD_DURATION: 'Creative:requestChangeAdDuration',
  REQUEST_VIDEO_LOCATION: 'Creative:requestVideoLocation'
}

/**
 * These messages require a response (either resolve or reject).
 * All other messages do not require a response and are information only.
 */
export const MessagesWithResponse: String[] = [
  CreativeMessage.CLICK_THRU,
  CreativeMessage.GET_MEDIA_STATE,
  CreativeMessage.READY,
  CreativeMessage.REPORT_TRACKING,
  CreativeMessage.REQUEST_CHANGE_AD_DURATION,
  CreativeMessage.REQUEST_FULL_SCREEN,
  CreativeMessage.REQUEST_PAUSE,
  CreativeMessage.REQUEST_PLAY,
  CreativeMessage.REQUEST_RESIZE,
  CreativeMessage.REQUEST_SKIP,
  CreativeMessage.REQUEST_STOP,
  CreativeMessage.REQUEST_VIDEO_LOCATION,
  CreativeMessage.REQUEST_VOLUME,
  PlayerMessage.AD_SKIPPED,
  PlayerMessage.AD_STOPPED,
  PlayerMessage.FATAL_ERROR,
  PlayerMessage.INIT,
  PlayerMessage.START_CREATIVE,
  ProtocolMessage.CREATE_SESSION,
]

// A list of errors the creative might send to the player.
export const CreativeErrorCode = {
  UNSPECIFIED: 1100,
  CANNOT_LOAD_RESOURCE: 1101,
  PLAYBACK_AREA_UNUSABLE: 1102,
  INCORRECT_VERSION: 1103,
  TECHNICAL_ERROR: 1104,
  EXPAND_NOT_POSSIBLE: 1105,
  PAUSE_NOT_HONORED: 1106,
  PLAYMODE_NOT_ADEQUATE: 1107,
  CREATIVE_INTERNAL_ERROR: 1108,
  DEVICE_NOT_SUPPORTED: 1109,
  MESSAGES_NOT_FOLLOWING_SPEC: 1110,
  PLAYER_RESPONSE_TIMEOUT: 1111,
}

// A list of errors the player might send to the creative.
export const PlayerErrorCode = {
  UNSPECIFIED: 1200,
  WRONG_VERSION: 1201,
  UNSUPPORTED_TIME: 1202,
  UNSUPPORTED_FUNCTIONALITY_REQUEST: 1203,
  UNSUPPORTED_ACTIONS: 1204,
  POSTMESSAGE_CHANNEL_OVERLOADED: 1205,
  VIDEO_COULD_NOT_LOAD: 1206,
  VIDEO_TIME_OUT: 1207,
  RESPONSE_TIMEOUT: 1208,
  MEDIA_NOT_SUPPORTED: 1209,
  SPEC_NOT_FOLLOWED_ON_INIT: 1210,
  SPEC_NOT_FOLLOWED_ON_MESSAGES: 1211,
}

// A list of reasons a player could stop the ad.
export const StopCode = {
  UNSPECIFIED: 0,
  USER_INITIATED: 1,
  MEDIA_PLAYBACK_COMPLETE: 2,
  PLAYER_INITATED: 3,
  CREATIVE_INITIATED: 4,
  NON_LINEAR_DURATION_COMPLETE: 5,
}

export type Message = {
  sessionId: string
  messageId: number
  timestamp: number
  type: string
  args: any
}

export type MessageCallback = (message: Message) => void

export type ResolveMessageArgs = {
  messageId: number,
  value: any,
}

export type RejectMessageArgsValue = {
  errorCode: number,
  message: string,
}

// #region COMMON MESSAGES ARGS
export type DurationMessageArgs = {
  duration: number
}

export type ErrorMessageArgs = {
  errorCode: number
  errorMessage: string
}

export type LogMessageArgs = {
  message: string
}

export type VolumeChangeMessageArgs = {
  volume: number
  muted: boolean
}

export type Dimensions = {
  x: number
  y: number
  width: number
  height: number
}
// #endregion COMMON MESSAGES ARGS

// #region MEDIA MESSAGES ARGS
export type MediaDurationChangeMessageArgs = DurationMessageArgs

export type MediaErrorMessageArgs = {
  error: number
  message: string
}

export type MediaTimeUpdateMessageArgs = {
  currentTime: number
}

export type MediaVolumeChangeMessageArgs = VolumeChangeMessageArgs

export type MediaState = {
  currentSrc?: string
  currentTime?: number
  duration?: number
  ended?: boolean
  muted?: boolean
  paused?: boolean
  volume?: number
  fullscreen?: boolean
}
// #endregion MEDIA MESSAGES ARGS

// #region PLAYER MESSAGES ARGS
export type PlayerAdStoppedMessageArgs = {
  code: number
}

export type PlayerFatalErrorMessageArgs = ErrorMessageArgs

// export type PlayerKeyDownMessageArgs = {
//   key: string,
//   code: number
// }

export type CreativeData = {
  adParameters: string
  clickThruUrl?: string
}

export enum SkippableState {
  PLAYER_HANDLES = 'playerHandles',
  AD_HANDLES = 'adHandles',
  NOT_SKIPPABLE = 'notSkippable',
}

enum NavigationSupport {
  AD_HANDLES = 'adHandles',
  PLAYER_HANDLES = 'playerHandles',
  NOT_SUPPORTED = 'notSupported',
}

enum CloseButtonSupport {
  AD_HANDLES = 'adHandles',
  PLAYER_HANDLES = 'playerHandles',
} 

export type EnvironmentData = {
  videoDimensions: Dimensions
  creativeDimensions: Dimensions
  fullscreen: boolean
  fullscreenAllowed: boolean
  variableDurationAllowed: boolean
  skippableState: SkippableState
  skipoffset?: string
  version: string
  siteUrl?: string
  appId?: string
  useragent?: string
  deviceId?: string
  muted?: boolean
  volume?: number
  navigationSupport?: NavigationSupport
  loseButtonSupport?: CloseButtonSupport
  nonlinearDuration?: number
}

export type PlayerInitMessageArgs = {
  environmentData: EnvironmentData
  creativeData: CreativeData
}

export type PlayerLogMessageArgs = LogMessageArgs

export type PlayerResizeMessageArgs = {
  videoDimensions: Dimensions
  creativeDimensions: Dimensions
  fullscreen: boolean
}

// #endregion PLAYER MESSAGES ARGS

// #region CREATIVE MESSAGES ARGS
export type CreativeClickThruMessageArgs = {
  x?: number
  y?: number
  playerHandles?: boolean
  url?: string
}

export type CreativeExpandNonLinearResolveMessageArgs = {
  creativeDimensions: Dimensions
}

export type CreativeFatalErrorMessageArgs = ErrorMessageArgs

export type CreativeGetMediaStateMessageArgs = MediaState

export type CreativeLogMessageArgs = LogMessageArgs

export type CreativeReportTrackingMessageArgs = {
  urls: string[]
}

export type CreativeRequestChangeAdDurationMessageArgs = DurationMessageArgs

export type CreativeRequestChangeVolumeMessageArgs = VolumeChangeMessageArgs

export type CreativeRequestNavigationMessageArgs = {
  uri: string
}

export type CreativeRequestResizeMessageArgs = {
  mediaDimensions: Dimensions
  creativeDimensions: Dimensions
}
// #endregion CREATIVE MESSAGES ARGS
