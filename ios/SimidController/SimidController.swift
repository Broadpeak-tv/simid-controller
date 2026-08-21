import UIKit
import WebKit
import Foundation

/**
 * Callback function called to retrieve current media state.
 * - Returns: the current media state
 */
public typealias GetMediaStateCallback = () -> MediaState

/**
 * Callback function called when the main video has to be played or resumed. 
 * - Returns: true if main video successfully played or resumed
 */
public typealias PlayMediaCallabck = () -> Bool

/**
 * Callback function called when the main video has to be paused. 
 * - Returns: true if main video successfully played or resumed
 */
public typealias PauseMediaCallback = () -> Bool

/**
 * Callback function called when a new SIMID WebView has to be added in application. 
 * - Parameter webview the SIMID WebView
 * - Returns: true if SIMID iframe has been successfully added, false otherwise
 */
public typealias AddSimidCallback = (_ webview: WKWebView) -> Bool

/**
 * Callback function called when the SIMID WebView has to be shown or hidden.
 * - Parameter show true to show the SIMID iframe, false to hide it
 */
public typealias ShowSimidCallback = (_ show: Bool) -> Void

/**
 * Callback function called when the SIMID WebView has to be resized. 
 * - Parameter dimensions the new SIMID WebView dimensions
 * - Returns: true if the SIMID WebView has been successfully resized, false otherwise
 */
public typealias ResizeSimidCallback = (_ dimensions: Dimensions) -> Bool

/**
 * Callback function called when the media player element has to be resized.
 * - Parameter dimensions the new player dimensions
 */
public typealias ResizePlayerCallback = (_ dimensions: Dimensions) -> Void

/**
 * Callback function called when the creative requests navigation to an external URI.
 * Used in mobile app environments where the player manages external URL navigation.
 * The player must open the URI and the callback is invoked after resolve is sent to the creative.
 * - Parameter uri the external URI to open
 */
public typealias OpenPageCallback = (_ uri: String) -> Void

/**
 * Callback function called when the current SIMID has completed.
 * @skipped true when SIMID has been skipped and terminated by the user 
 */
public typealias CompleteCallback = (_ skipped: Bool) -> Void

/**
 * Callback function called when an error occurred.
 * - Parameter messageType the message type that caused/sent the error
 * - Parameter errorCode the error code
 * - Parameter errorMEssage the error message
 */
public typealias ErrorCallback = (_ messageType: String, _ errorCode: Int, _ errorMessage: String) -> Void

open class SimidController: SimidComponent, WKScriptMessageHandler, WKNavigationDelegate {

    public static let VERSION = "0.9.0"
    public nonisolated static let MEDIA_TIMEUPDATE_INTERVAL_MS: UInt64 = 1000

    private var webView: WKWebView?

    private var playerDimensions: Dimensions
    private var creativeDimensions: Dimensions
    private let creativeUri: String
    private let creativeData: CreativeData
    private let adDuration: Double
    private let adSkippable: Bool
    private let mediaTimeupdateInterval: UInt64

    private var autoStart = true
    private var initialized = false
    private var isStopping = false
    private var nonLinearStartTime: Double = -1

    private var mediaTimeupdateTask: Task<Void, Error>?

    private var onGetMediaState: GetMediaStateCallback?
    private var onPlayMedia: PlayMediaCallabck?
    private var onPauseMedia: PauseMediaCallback?
    private var onAddSimid: AddSimidCallback?
    private var onShowSimid: ShowSimidCallback?
    private var onResizeSimid: ResizeSimidCallback?
    private var onResizePlayer: ResizeSimidCallback?
    private var onOpenPage: ResizePlayerCallback?
    private var onComplete: CompleteCallback?
    private var onError: ErrorCallback?

    /**
     * Set up the SIMID controller an starts listening for messages from the creative.
     * - Parameter playerDimensions: the main player dimensions
     * - Parameter creativeDimensions: the initial creative dimensions the application/player will set
     * - Parameter creativeUri: The creative URI
     * - Parameter creativeData: the creative data (ad parameters, clickThruUrl)
     * - Parameter adDuration: the display duration of the creative (0 by default, meaning no requested duration)
     * - Parameter adSkippable: true if the linear ad is skippable (false by default)
     * - Parameter mediaTimeupdateInterval: the interval in ms to send media timeupdate message to the creative (250ms by default, -1 to disable)
     */
    public init(
        playerDimensions: Dimensions,
        creativeDimensions: Dimensions,
        creativeUri: String,
        creativeData: CreativeData,
        adDuration: Double = 0,
        adSkippable: Bool = false,
        mediaTimeupdateInterval: UInt64 = MEDIA_TIMEUPDATE_INTERVAL_MS
    ) {
        self.playerDimensions = playerDimensions
        self.creativeDimensions = creativeDimensions
        self.creativeUri = creativeUri
        self.creativeData = creativeData
        self.adDuration = adDuration
        self.adSkippable = adSkippable
        self.mediaTimeupdateInterval = mediaTimeupdateInterval

        super.init(type: "Player")

        addCreativeMessageListeners()
    }
    
    /**
     * Set the callback function called to retrieve current media state.
     * - Parameter cb: the callback function
     */
    public func onGetMediaState(_ cb: @escaping GetMediaStateCallback) { self.onGetMediaState = cb }

    /**
     * Set the callback function called when the main video has to be played or resumed.
     * - Parameter cb: the callback function
     */
    public func onPlayMedia(_ cb: @escaping PlayMediaCallabck) { self.onPlayMedia = cb }

    /**
     * Set the callback function called when the main video has to be paused.
     * - Parameter cb: the callback function
     */
    public func onPauseMedia(_ cb: @escaping PauseMediaCallback) { self.onPauseMedia = cb }

    /**
     * Set the callback function called when a new SIMID WebView has to be added in application.
     * - Parameter cb: the callback function
     */
    public func onAddSimid(_ cb: @escaping AddSimidCallback) { self.onAddSimid = cb }

    /**
     * Set the callback function called when the SIMID iframe has to be shown or hidden.
     * - Parameter cb: the callback function
     */
    public func onShowSimid(_ cb: @escaping ShowSimidCallback) { self.onShowSimid = cb }

    /**
     * Set the callback function called when the SIMID iframe has to be resized.
     * - Parameter cb: the callback function
     */
    public func onResizeSimid(_ cb: @escaping ResizeSimidCallback) { self.onResizeSimid = cb }

    /**
     * Set the callback function called when the media player element has to be resized.
     * - Parameter cb: the callback function
     */
    public func onResizePlayer(_ cb: @escaping ResizePlayerCallback) { self.onResizePlayer = cb }

    /**
     * Set the callback function called when the creative requests navigation to an external URI.
     * Used in mobile app environments where the player manages external URL navigation.
     * The player must open the URI and the callback is invoked after resolve is sent to the creative.
     * - Parameter cb: the callback function
     */
    public func onOpenPage(_ cb: @escaping OpenPageCallback) { self.onOpenPage = cb }

    /**
     * Set the callback function called when the current SIMID has completed.
     * - Parameter cb: the callback function
     */
    public func onComplete(_ cb: @escaping CompleteCallback) { self.onComplete = cb }

    /**
     * Set the callback function called when an error occurred.
     * - Parameter cb: the callback function
     */
    public func onError(_ cb: @escaping ErrorCallback) { self.onError = cb }

    /*
     * Return the current SIMID controller version.
     * - Returns: the current SIMID controller version
     */
    public func getVersion() -> String {
        return SimidController.VERSION
    }
    
    /**
     * Initialize and load ad. This should be called before an ad plays.
     * Creates a WebView and load the SIMID the creative.
     * - Parameter autoStart: true to start the creative once initialized
     */
    public func load(autoStart: Bool = true) {
        self.autoStart = autoStart
        createWebView()
    }

    /**
     * Start the loaded creative.
     */
    public func start() {
        guard initialized else {
            autoStart = true
            return
        }
        startCreative()
    }

    /**
     * Stop and reset the SIMID session.
     */
    public func reset() {
        stopAd()
    }

    /**
     * Notify the SIMID controller any changes any of ad components’ size
     * - Parameter playerDimensions: the new player dimensions
     * - Parameter creativeDimensions: the new creative dimensions
     * - Parameter fullscreen: true if in fullscreen mode
     */
    public func notifyResize(playerDimensions: Dimensions,
                             creativeDimensions: Dimensions,
                             fullscreen: Bool) {
        guard initialized else { return }

        self.playerDimensions = playerDimensions
        self.creativeDimensions = creativeDimensions

        let args = PlayerResizeMessageArgs(
            videoDimensions: playerDimensions,
            creativeDimensions: creativeDimensions,
            fullscreen: fullscreen
        )

        Task { try? await sendMessage(PlayerMessage.RESIZE, args: args) }
    }


    open override func postMessage(_ message: String) {
        SimidLogger.d("[SIMID][Player][S] \(message)")
        
        Task { @MainActor in
            guard let webView = self.webView else { return }

            let script = "window.originalPostMessage('\(message)', '*');"
            Task {
                try? await webView.evaluateJavaScript(script)
            }
//            webView.evaluateJavaScript(script, completionHandler: nil)
        }
    }

    // MARK: CREATIVE MESSAGE HANDLERS

    private func addCreativeMessageListeners() {
        addMessageListener(ProtocolMessage.CREATE_SESSION) { [weak self] message in self?.onCreateSession(message) }
        addMessageListener(CreativeMessage.FATAL_ERROR) { [weak self] message in self?.onCreativeFatalError(message) }
        addMessageListener(CreativeMessage.GET_MEDIA_STATE) { [weak self] message in self?.onCreativeGetMediaState(message) }
        addMessageListener(CreativeMessage.REQUEST_PAUSE) { [weak self] message in self?.onCreativeRequestPause(message) }
        addMessageListener(CreativeMessage.REQUEST_PLAY) { [weak self] message in self?.onCreativeRequestPlay(message) }
        addMessageListener(CreativeMessage.REQUEST_RESIZE) { [weak self] message in self?.onCreativeRequestResize(message) }
        addMessageListener(CreativeMessage.REQUEST_SKIP) { [weak self] message in self?.onCreativeRequestSkip(message) }
        addMessageListener(CreativeMessage.REQUEST_STOP) { [weak self] message in self?.onCreativeRequestStop(message) }
        addMessageListener(CreativeMessage.EXPAND_NONLINEAR) { [weak self] message in self?.onCreativeExpandNonlinear(message) }
        addMessageListener(CreativeMessage.COLLAPSE_NONLINEAR) { [weak self] message in self?.onCreativeCollapseNonlinear(message) }
        addMessageListener(CreativeMessage.CLICK_THRU) { [weak self] message in self?.onCreativeClickThru(message) }
        addMessageListener(CreativeMessage.REQUEST_NAVIGATION) { [weak self] message in self?.onCreativeRequestNavigation(message) }
    }
    
    private func onCreateSession(_ message: Message) {
        // [3] - createSession sent by the creative (message resolved in SimidComponent::receiveMessage())
        // [4] - send Player:init message
        self.sendInitMessage()
    }
    
    private func onCreativeFatalError(_ message: Message) {
        let args = message.args as? CreativeFatalErrorMessageArgs
        self.onError?(CreativeMessage.FATAL_ERROR, args!.errorCode, args!.errorMessage)
        self.stopAd(reason: StopCode.CREATIVE_INITIATED)
    }
    
    private func onCreativeGetMediaState(_ message: Message) {
        guard let state = self.onGetMediaState?() else { return }
        self.resolveMessage(message, outgoingArgs: .mediaState(state))
    }

    private func onCreativeRequestPause(_ message: Message) {
        guard self.initialized else {
            SimidLogger.w("Session not initialized, requestPause ignored")
            return
        }
        (self.onPauseMedia?() ?? false) ? self.resolveMessage(message) : self.rejectMessage(message)
    }
    
    private func onCreativeRequestPlay(_ message: Message) {
        guard self.initialized else {
            SimidLogger.w("Session not initialized, requestPlay ignored")
            return
        }
        (self.onPlayMedia?() ?? false) ? self.resolveMessage(message) : self.rejectMessage(message)
    }
    
    private func onCreativeRequestResize(_ message: Message) {
        guard let onResizeSimid = self.onResizeSimid,
              let onResizePlayer = self.onResizePlayer
        else {
            self.rejectMessage(message, errorCode: PlayerErrorCode.UNSPECIFIED, errorMessage: "Resize not supported by the player")
            return
        }

        let args = message.args as? CreativeRequestResizeMessageArgs
        let creativeDim = args!.creativeDimensions
        let mediaDim = args!.mediaDimensions ?? args!.videoDimensions

        guard let mediaDim else {
            self.rejectMessage(message, errorCode: PlayerErrorCode.UNSPECIFIED, errorMessage: "Missing input dimensions to resize")
            return
        }

        // Resize SIMID iframe
        guard onResizeSimid(creativeDim) else {
            self.rejectMessage(message, errorCode: PlayerErrorCode.UNSPECIFIED, errorMessage: "The player is unable to complete the Creative resizing")
            return
        }
        // Store creative dimensions (reused when collapsed)
        self.creativeDimensions = creativeDim
        
        // If creative successfully resized then resize the main player/
        onResizePlayer(mediaDim)

        self.resolveMessage(message)

    }

    private func onCreativeRequestSkip(_ message: Message) {
        self.resolveMessage(message)
        self.skipAd()
    }

    private func onCreativeRequestStop(_ message: Message) {
        self.resolveMessage(message)
        self.stopAd()
    }
    
    private func onCreativeExpandNonlinear(_ message: Message) {
        guard self.initialized else {
            SimidLogger.w("Session not initialized, expandNonlinear ignored")
            return
        }
        // Under normal circumstances, the player pauses the media.
        // In cases when the content is video, the player resizes the creative iframe to the dimensions of the video
        // and places the expanded creative at video zero coordinates.
        _ = self.onPauseMedia?()
        (self.onResizeSimid?(playerDimensions) ?? false) ? self.resolveMessage(message) : rejectMessage(message, errorCode: PlayerErrorCode.UNSPECIFIED, errorMessage: "Unable to expand nonlinear ad")
    }
    
    private func onCreativeCollapseNonlinear(_ message: Message) {
        guard self.initialized else {
            SimidLogger.w("Session not initialized, expandNonlinear ignored")
            return
        }
        // The player resizes the ad to its original state and resumes the content media playback.
        _ = self.onPlayMedia?()
        (self.onResizeSimid?(creativeDimensions) ?? false) ? self.resolveMessage(message) : rejectMessage(message, errorCode: PlayerErrorCode.UNSPECIFIED, errorMessage: "Unable to collapse nonlinear ad")
    }

    private func onCreativeClickThru(_ message: Message) {
        guard let args = message.args as? CreativeClickThruMessageArgs else {
            self.rejectMessage(message)
            return
        }

        // Open landing page only when playerHandles is true
        if args.playerHandles != true {
            return
        }
        
        let uri = args.uri ?? args.url // url deprecated in favor of uri
        self.onOpenUri(message: message, uri: uri)
    }
    
    private func onCreativeRequestNavigation(_ message: Message) {
        guard let args = message.args as? CreativeRequestNavigationMessageArgs else {
            return
        }
        self.onOpenUri(message: message, uri: args.uri)
    }
    
    // MARK: - WEBVIEW MANAGEMENT

    private func createWebView() {
        let config = WKWebViewConfiguration()
        let contentController = WKUserContentController()

        // Uncomment to forward console logs to applications logs
//        let consoleBridge = WebViewConsoleBridge()
//        contentController.add(consoleBridge, name: "console")
//        contentController.addUserScript(
//            WebViewConsoleBridge.makeConsoleScript()
//        )

        contentController.add(self, name: "ios")
        config.userContentController = contentController

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = self
        webView.backgroundColor = .clear
        webView.isOpaque = false
        webView.isHidden = true

        self.webView = webView

        let js = """
        console.log("[ios] override postMessage")
        window.originalPostMessage = window.postMessage; 
        window.postMessage = function(message) {
            window.webkit.messageHandlers.ios.postMessage(message);
        };
        """

        let script = WKUserScript(source: js, injectionTime: .atDocumentStart, forMainFrameOnly: false)
        contentController.addUserScript(script)

        webView.load(URLRequest(url: URL(string: creativeUri)!))

        onAddSimid!(webView)
    }

    private func clearWebView() {
        webView?.removeFromSuperview()
        webView = nil
    }
    
    public func userContentController(_ userContentController: WKUserContentController,
                                      didReceive message: WKScriptMessage) {
        guard let messageStr = message.body as? String else { return }
        receiveMessage(messageStr)
    }

    // MARK: - Session init/start

    private func sendInitMessage() {
        let env = EnvironmentData(
            videoDimensions: playerDimensions,
            creativeDimensions: creativeDimensions,
            fullscreen: false,
            fullscreenAllowed: true,
            variableDurationAllowed: true,
            skippableState: adSkippable ? SkippableState.AD_HANDLES : SkippableState.NOT_SKIPPABLE,
            skipoffset: nil,
            version: protocolVersion,
            siteUrl: nil,
            appId: nil,
            useragent: nil,
            deviceId: nil,
            muted: false,
            volume: 1.0,
            navigationSupport: onOpenPage != nil
                ? NavigationSupport.PLAYER_HANDLES
                : NavigationSupport.AD_HANDLES,
            closeButtonSupport: nil,
            nonlinearDuration: adDuration
        )

        // Escape characters to avoid JSON parsing failure in Creative
        let adParams = self.creativeData.adParameters.replacingOccurrences(
            of: "\"",
            with: "\\\""
        )
        
        let creativeData = CreativeData(
            adParameters: adParams,
            clickThruUrl: self.creativeData.clickThruUrl
        )

        let args = PlayerInitMessageArgs(
            environmentData: env,
            creativeData: creativeData
        )

        Task {
            do {
                try await sendMessage(PlayerMessage.INIT, args: args)
                initialized = true
                if autoStart { startCreative() }
            } catch let error as RejectError {
                SimidLogger.d("Init failed: \(error)")
                self.onError?(PlayerMessage.INIT, error.errorCode, error.message)
                self.stopAd()
            }
        }
    }

    private func startCreative() {
        Task {
            let state = onGetMediaState?()
            nonLinearStartTime = state?.currentTime ?? 0

            do {
                try await sendMessage(PlayerMessage.START_CREATIVE)
                onShowSimid?(true)
                startMediaTimeupdateInterval()
            } catch let error as RejectError {
                SimidLogger.d("Failed to start creative: \(error)")
                self.onError?(PlayerMessage.START_CREATIVE, error.errorCode, error.message)
            }
        }
    }
    
    // MARK: - Session stop flow

    private func stopAd(reason: Int = StopCode.PLAYER_INITATED) {
        stopSession(skipped: false, reason: reason)
    }

    private func skipAd() {
        stopSession(skipped: true)
    }

    private func stopSession(skipped: Bool = false, reason: Int = StopCode.PLAYER_INITATED) {
        guard !isStopping else { return }
        isStopping = true

        stopMediaTimeupdateInterval()
        onShowSimid?(false)

        completeAd(skipped: skipped)

        Task {
            if initialized {
                if skipped {
                    try? await sendMessage(PlayerMessage.AD_SKIPPED)
                } else {
                    let args = PlayerAdStoppedMessageArgs(code: reason)
                    try? await sendMessage(PlayerMessage.AD_STOPPED, args: args)
                }
            }

            clearWebView()
            resetSession()
        }
    }

    private func completeAd(skipped: Bool) {
        // Resize the main player to its original dimensions
        onResizePlayer?(playerDimensions)

        // Notify player ad is complete, if skipped this enables player to seek after the current linear ad
        onComplete?(skipped)
    }

    // MARK: - Media state loop

    private func startMediaTimeupdateInterval() {
        stopMediaTimeupdateInterval()

        mediaTimeupdateTask = Task {
            do {
                while true {
                    try? await Task.sleep(nanoseconds: mediaTimeupdateInterval * 1_000_000)
                    
                    try Task.checkCancellation()

                    guard let state = onGetMediaState?(),
                          let currentTime = state.currentTime else { continue }
                    
                    mediaTimeUpdated(currentTime)
                }
            } catch is CancellationError {
                return
            }
        }
    }

    private func stopMediaTimeupdateInterval() {
        mediaTimeupdateTask?.cancel()
        mediaTimeupdateTask = nil
    }
    
    private func mediaTimeUpdated(_ currentTime: Double) {

        Task { try? await sendMessage(MediaMessage.TIME_UPDATE, args: MediaTimeUpdateMessageArgs(currentTime: currentTime)) }

        // For nonlinear ads, stop the ad once requested duration is over
        if adDuration > 0,
           nonLinearStartTime >= 0,
           currentTime - nonLinearStartTime > adDuration {
            nonLinearStartTime = 0.0
            stopAd(reason: StopCode.NON_LINEAR_DURATION_COMPLETE)
        }
    }
    
    // MARK: - Click through
    private func onOpenUri(message: Message, uri: String?) {
        guard uri != nil else {
            self.rejectMessage(message, errorCode:PlayerErrorCode.NAVIGATION_NOT_SUPPORTED, errorMessage:"Invalid URI")
            return
        }

        guard self.onOpenPage != nil else {
            self.rejectMessage(message, errorCode:PlayerErrorCode.NAVIGATION_NOT_SUPPORTED, errorMessage: "Navigation not supported by the player")
            return
        }

        // Spec §4.4.12.1: resolve before opening the window so the creative receives
        // the message prior to the app being backgrounded.
        self.resolveMessage(message)

        _ = self.onPauseMedia?()
        self.onOpenPage?(uri!)
    }
}
