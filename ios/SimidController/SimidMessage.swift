import Foundation

// MARK: - Callback

typealias MessageCallback = (Message) -> Void

// MARK: - Protocol Messages

enum ProtocolMessage {
    static let CREATE_SESSION = "createSession"
    static let RESOLVE = "resolve"
    static let REJECT = "reject"
}

let SIMID_NS = "SIMID:"

// MARK: - Media Messages

enum MediaMessage {
    static let DURATION_CHANGE = "SIMID:Media:durationchange"
    static let ENDED = "SIMID:Media:ended"
    static let ERROR = "SIMID:Media:error"
    static let PAUSE = "SIMID:Media:pause"
    static let PLAY = "SIMID:Media:play"
    static let PLAYING = "SIMID:Media:playing"
    static let SEEKED = "SIMID:Media:seeked"
    static let SEEKING = "SIMID:Media:seeking"
    static let STALLED = "SIMID:Media:stalled"
    static let TIME_UPDATE = "SIMID:Media:timeupdate"
    static let VOLUME_CHANGE = "SIMID:Media:volumechange"
}

// MARK: - Player Messages

enum PlayerMessage {
    static let AD_SKIPPED = "SIMID:Player:adSkipped"
    static let AD_STOPPED = "SIMID:Player:adStopped"
    static let FATAL_ERROR = "SIMID:Player:fatalError"
    static let INIT = "SIMID:Player:init"
    static let LOG = "SIMID:Player:log"
    static let RESIZE = "SIMID:Player:resize"
    static let START_CREATIVE = "SIMID:Player:startCreative"
}

// MARK: - Video Events

enum VideoEvent {
    static let DURATION_CHANGE = "durationchange"
    static let ENDED = "ended"
    static let ERROR = "error"
    static let PAUSE = "pause"
    static let PLAY = "play"
    static let PLAYING = "playing"
    static let SEEKED = "seeked"
    static let SEEKING = "seeking"
    static let STALLED = "stalled"
    static let TIME_UPDATE = "timeupdate"
    static let VOLUME_CHANGE = "volumechange"
}

// MARK: - Creative Messages

enum CreativeMessage {
    static let CLICK_THRU = "SIMID:Creative:clickThru"
    static let COLLAPSE_NONLINEAR = "SIMID:Creative:collapseNonlinear"
    static let EXPAND_NONLINEAR = "SIMID:Creative:expandNonlinear"
    static let FATAL_ERROR = "SIMID:Creative:fatalError"
    static let GET_MEDIA_STATE = "SIMID:Creative:getMediaState"
    static let LOG = "SIMID:Creative:log"
    static let REPORT_TRACKING = "SIMID:Creative:reportTracking"
    static let REQUEST_CHANGE_AD_DURATION = "SIMID:Creative:requestChangeAdDuration"
    static let REQUEST_CHANGE_VOLUME = "SIMID:Creative:requestChangeVolume"
    static let REQUEST_FULLSCREEN = "SIMID:Creative:requestFullScreen"
    static let REQUEST_EXIT_FULLSCREEN = "SIMID:Creative:requestExitFullScreen"
    static let REQUEST_NAVIGATION = "SIMID:Creative:requestNavigation"
    static let REQUEST_PAUSE = "SIMID:Creative:requestPause"
    static let REQUEST_PLAY = "SIMID:Creative:requestPlay"
    static let REQUEST_RESIZE = "SIMID:Creative:requestResize"
    static let REQUEST_SKIP = "SIMID:Creative:requestSkip"
    static let REQUEST_STOP = "SIMID:Creative:requestStop"
}

// MARK: - Messages requiring response

public let MessagesWithResponse: [String] = [
    CreativeMessage.CLICK_THRU,
    CreativeMessage.GET_MEDIA_STATE,
    CreativeMessage.COLLAPSE_NONLINEAR,
    CreativeMessage.EXPAND_NONLINEAR,
    CreativeMessage.GET_MEDIA_STATE,
    CreativeMessage.REPORT_TRACKING,
    CreativeMessage.REQUEST_CHANGE_AD_DURATION,
    CreativeMessage.REQUEST_CHANGE_VOLUME,
    CreativeMessage.REQUEST_FULLSCREEN,
    CreativeMessage.REQUEST_EXIT_FULLSCREEN,
    CreativeMessage.REQUEST_NAVIGATION,
    CreativeMessage.REQUEST_PAUSE,
    CreativeMessage.REQUEST_PLAY,
    CreativeMessage.REQUEST_RESIZE,
    CreativeMessage.REQUEST_SKIP,
    CreativeMessage.REQUEST_STOP,
    PlayerMessage.AD_SKIPPED,
    PlayerMessage.AD_STOPPED,
    PlayerMessage.FATAL_ERROR,
    PlayerMessage.INIT,
    PlayerMessage.START_CREATIVE,
    ProtocolMessage.CREATE_SESSION
]

// MARK: - Error Codes

enum CreativeErrorCode {
    static let UNSPECIFIED: Int64 = 1100
    static let CANNOT_LOAD_RESOURCE: Int64 = 1101
    static let PLAYBACK_AREA_UNUSABLE: Int64 = 1102
    static let INCORRECT_VERSION: Int64 = 1103
    static let TECHNICAL_ERROR: Int64 = 1104
    static let EXPAND_NOT_POSSIBLE: Int64 = 1105
    static let PAUSE_NOT_HONORED: Int64 = 1106
    static let PLAYMODE_NOT_ADEQUATE: Int64 = 1107
    static let CREATIVE_INTERNAL_ERROR: Int64 = 1108
    static let DEVICE_NOT_SUPPORTED: Int64 = 1109
    static let MESSAGES_NOT_FOLLOWING_SPEC: Int64 = 1110
    static let PLAYER_RESPONSE_TIMEOUT: Int64 = 1111
}

enum PlayerErrorCode {
    static let UNSPECIFIED: Int64 = 1200
    static let WRONG_VERSION: Int64 = 1201
    static let UNSUPPORTED_TIME: Int64 = 1202
    static let UNSUPPORTED_FUNCTIONALITY_REQUEST: Int64 = 1203
    static let UNSUPPORTED_ACTIONS: Int64 = 1204
    static let POSTMESSAGE_CHANNEL_OVERLOADED: Int64 = 1205
    static let VIDEO_COULD_NOT_LOAD: Int64 = 1206
    static let VIDEO_TIME_OUT: Int64 = 1207
    static let RESPONSE_TIMEOUT: Int64 = 1208
    static let MEDIA_NOT_SUPPORTED: Int64 = 1209
    static let SPEC_NOT_FOLLOWED_ON_INIT: Int64 = 1210
    static let SPEC_NOT_FOLLOWED_ON_MESSAGES: Int64 = 1211
    static let CREATIVE_DID_NOT_REPLY_TO_INIT: Int64 = 1212
    static let CREATIVE_DID_NOT_REPLY_TO_START_CREATIVE: Int64 = 1213
    static let NAVIGATION_NOT_SUPPORTED: Int64 = 1214
    static let NAVIGATION_NOT_POSSIBLE: Int64 = 1215
    static let NAVIGATION_TOO_MANY_CALLS: Int64 = 1216
    static let NAVIGATION_INVALID_URL: Int64 = 1217
    static let NAVIGATION_INVALID_APP: Int64 = 1218
}

// MARK: - Stop Codes

enum StopCode {
    static let UNSPECIFIED = 0
    static let USER_INITIATED = 1
    static let MEDIA_PLAYBACK_COMPLETE = 2
    static let PLAYER_INITATED = 3
    static let CREATIVE_INITIATED = 4
    static let NON_LINEAR_DURATION_COMPLETE = 5
}

// MARK: - States

enum SkippableState {
    static let PLAYER_HANDLES = "playerHandles"
    static let AD_HANDLES = "adHandles"
    static let NOT_SKIPPABLE = "notSkippable"
}

enum NavigationSupport {
    static let AD_HANDLES = "adHandles"
    static let PLAYER_HANDLES = "playerHandles"
    static let NOT_SUPPORTED = "notSupported"
}

enum CloseButtonSupport {
    static let AD_HANDLES = "adHandles"
    static let PLAYER_HANDLES = "playerHandles"
}

// MARK: - Data Structures

public struct Dimensions: Codable {
    public let x: Int
    public let y: Int
    public let width: Int
    public let height: Int

    public init(
        x: Int,
        y: Int,
        width: Int,
        height: Int
    ) {
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    }
}

public struct MediaState: Codable {

    public let currentSrc: String?
    public let currentTime: Double?
    public let duration: Double?
    public let ended: Bool?
    public let muted: Bool?
    public let paused: Bool?
    public let volume: Float?
    public let fullscreen: Bool?

    public init(
        currentSrc: String? = nil,
        currentTime: Double? = nil,
        duration: Double? = nil,
        ended: Bool? = nil,
        muted: Bool? = nil,
        paused: Bool? = nil,
        volume: Float? = nil,
        fullscreen: Bool? = nil
    ) {
        self.currentSrc = currentSrc
        self.currentTime = currentTime
        self.duration = duration
        self.ended = ended
        self.muted = muted
        self.paused = paused
        self.volume = volume
        self.fullscreen = fullscreen
    }
}

// MARK: - Messages

struct Message: Codable {
    let type: String
    let sessionId: String
    let messageId: Int
    let timestamp: Int64
    let args: MessageArgs?
    
    enum CodingKeys: String, CodingKey {
        case type, sessionId, messageId, timestamp, args
    }

    init(
        type: String,
        sessionId: String,
        messageId: Int,
        timestamp: Int64,
        args: MessageArgs? = nil
    ) {
        self.type = type
        self.sessionId = sessionId
        self.messageId = messageId
        self.timestamp = timestamp
        self.args = args
    }
    
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        self.type = try values.decode(String.self, forKey: .type)
        self.sessionId = try values.decode(String.self, forKey: .sessionId)
        self.messageId = try values.decode(Int.self, forKey: .messageId)
        self.timestamp = try values.decode(Int64.self, forKey: .timestamp)
        
        guard let argsType = MessageArgsRegistry.shared[type] else {
            self.args = nil
            return
        }
        self.args = try argsType.init(from: values.superDecoder(forKey: .args))
    }

    
    func encode(to encoder: Encoder) throws {
        var values = encoder.container(keyedBy: CodingKeys.self)
        try values.encode(self.type, forKey: .type)
        try values.encode(self.sessionId, forKey: .sessionId)
        try values.encode(self.messageId, forKey: .messageId)
        try values.encode(self.timestamp, forKey: .timestamp)
        
        try args?.encode(to: values.superEncoder(forKey: .args))
    }
}

protocol MessageArgs: Codable {}

struct MessageArgsRegistry {
    static let shared: [String: MessageArgs.Type] = [
        ProtocolMessage.RESOLVE: ResolveMessageArgs.self,
        ProtocolMessage.REJECT: RejectMessageArgs.self,
        MediaMessage.DURATION_CHANGE: MediaDurationChangeMessageArgs.self,
        MediaMessage.ERROR: MediaErrorMessageArgs.self,
        MediaMessage.TIME_UPDATE: MediaTimeUpdateMessageArgs.self,
        MediaMessage.VOLUME_CHANGE: MediaVolumeChangeMessageArgs.self,
        PlayerMessage.AD_STOPPED: PlayerAdStoppedMessageArgs.self,
        PlayerMessage.FATAL_ERROR: PlayerFatalErrorMessageArgs.self,
        PlayerMessage.INIT: PlayerInitMessageArgs.self,
        PlayerMessage.LOG: PlayerLogMessageArgs.self,
        PlayerMessage.RESIZE: PlayerResizeMessageArgs.self,
        CreativeMessage.CLICK_THRU: CreativeClickThruMessageArgs.self,
        CreativeMessage.FATAL_ERROR: CreativeFatalErrorMessageArgs.self,
        CreativeMessage.LOG: MediaDurationChangeMessageArgs.self,
        CreativeMessage.REPORT_TRACKING: CreativeReportTrackingMessageArgs.self,
        CreativeMessage.REQUEST_CHANGE_VOLUME: CreativeRequestChangeVolumeMessageArgs.self,
        CreativeMessage.REQUEST_CHANGE_AD_DURATION: CreativeRequestChangeAdDurationMessageArgs.self,
        CreativeMessage.REQUEST_NAVIGATION: CreativeRequestNavigationMessageArgs.self,
        CreativeMessage.REQUEST_RESIZE: CreativeRequestResizeMessageArgs.self
    ]
}

struct ResolveMessageArgs: MessageArgs {
    let messageId: Int
    let value: MediaState?
}

struct RejectMessageValue: MessageArgs {
    let errorCode: Int64
    let message: String
}

struct RejectMessageArgs: MessageArgs {
    let messageId: Int
    let value: RejectMessageValue
}

struct DurationMessageArgs: MessageArgs {
    let duration: Int
}

struct ErrorMessageArgs: MessageArgs {
    let errorCode: Int
    let errorMessage: String
}

struct LogMessageArgs: MessageArgs {
    let message: String
}

struct VolumeChangeMessageArgs: MessageArgs {
    let volume: Float
    let muted: Bool
}

// MARK: - Media Args

struct MediaDurationChangeMessageArgs: MessageArgs {
    let duration: Double
}

struct MediaErrorMessageArgs: MessageArgs {
    let error: Int
    let message: String
}

struct MediaTimeUpdateMessageArgs: MessageArgs {
    let currentTime: Double
}

struct MediaVolumeChangeMessageArgs: MessageArgs {
    let volume: Int
    let muted: Bool
}

// MARK: - Player Args

struct PlayerAdStoppedMessageArgs: MessageArgs {
    let code: Int
}

struct PlayerFatalErrorMessageArgs: MessageArgs {
    let errorCode: Int
    let errorMessage: String
}

// MARK: - Creative / Environment

struct CreativeData: Codable {
    let adParameters: String
    let clickThruUrl: String
}

struct EnvironmentData: Codable {
    let videoDimensions: Dimensions
    let creativeDimensions: Dimensions
    let fullscreen: Bool
    let fullscreenAllowed: Bool
    let variableDurationAllowed: Bool
    let skippableState: String
    let skipoffset: String?
    let version: String
    let siteUrl: String?
    let appId: String?
    let useragent: String?
    let deviceId: String?
    let muted: Bool?
    let volume: Double?
    let navigationSupport: String?
    let closeButtonSupport: String?
    let nonlinearDuration: Double?
}

struct PlayerInitMessageArgs: MessageArgs {
    let environmentData: EnvironmentData
    let creativeData: CreativeData
}

struct PlayerLogMessageArgs: MessageArgs {
    let message: String
}

struct PlayerResizeMessageArgs: MessageArgs {
    let videoDimensions: Dimensions
    let creativeDimensions: Dimensions
    let fullscreen: Bool
}

// MARK: - Creative Message Args

struct CreativeClickThruMessageArgs: MessageArgs {
    let x: Int?
    let y: Int?
    let playerHandles: Bool?
    let url: String?
}

struct CreativeFatalErrorMessageArgs: MessageArgs {
    let errorCode: Int
    let errorMessage: String
}

struct CreativeLogMessageArgs: MessageArgs {
    let message: String
}

struct CreativeReportTrackingMessageArgs: MessageArgs {
    let urls: [String]
}

struct CreativeRequestChangeAdDurationMessageArgs: MessageArgs {
    let duration: Double
}

struct CreativeRequestChangeVolumeMessageArgs: MessageArgs {
    let volume: Double
    let muted: Bool
}

struct CreativeRequestNavigationMessageArgs: MessageArgs {
    let uri: String
}

struct CreativeRequestResizeMessageArgs: MessageArgs {
    let mediaDimensions: Dimensions?
    let videoDimensions: Dimensions?
    let creativeDimensions: Dimensions
}
