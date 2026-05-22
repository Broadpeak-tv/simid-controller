import UIKit
import WebKit
import Foundation

@MainActor
open class SimidController: SimidComponent, WKScriptMessageHandler, WKNavigationDelegate {

    // MARK: - Constants

    public static let VERSION = "1.0"
    public static let MEDIA_TIMEUPDATE_INTERVAL_MS: UInt64 = 1000

    // MARK: - Dependencies

    private weak var viewController: UIViewController?
    private weak var containerView: UIView?

    private var webView: WKWebView?

    // MARK: - Configuration

    private var playerDimensions: Dimensions
    private var creativeDimensions: Dimensions
    private let creativeUri: String
    private let adParameters: String
    private let adDuration: Double
    private let adSkippable: Bool
    private let mediaTimeupdateInterval: UInt64

    // MARK: - State

    private var autoStart = true
    private var initialized = false
    private var isStopping = false
    private var nonLinearStartTime: Double = -1

    private var mediaTask: Task<Void, Never>?

    // MARK: - Callbacks

    private var onGetMediaState: (() -> MediaState)?
    private var onPlayMedia: (() -> Bool)?
    private var onPauseMedia: (() -> Bool)?
    private var onAddSimid: ((WKWebView) -> Void)?
    private var onShowSimid: ((Bool) -> Void)?
    private var onResizeSimid: ((Dimensions) -> Bool)?
    private var onResizePlayer: ((Dimensions) -> Void)?
    private var onOpenClickthrough: ((String) -> Void)?
    private var onComplete: ((Bool) -> Void)?

    // MARK: - Init

    public init(
        viewController: UIViewController,
        containerView: UIView,
        playerDimensions: Dimensions,
        creativeDimensions: Dimensions,
        creativeUri: String,
        adParameters: String = "",
        adDuration: Double = 0,
        adSkippable: Bool = false,
        mediaTimeupdateInterval: UInt64 = MEDIA_TIMEUPDATE_INTERVAL_MS
    ) {
        self.viewController = viewController
        self.containerView = containerView
        self.playerDimensions = playerDimensions
        self.creativeDimensions = creativeDimensions
        self.creativeUri = creativeUri
        self.adParameters = adParameters
        self.adDuration = adDuration
        self.adSkippable = adSkippable
        self.mediaTimeupdateInterval = mediaTimeupdateInterval

        super.init(type: "Player")

        addCreativeMessageListeners()
    }

    // MARK: - Public API

    public func load(autoStart: Bool = true) {
        self.autoStart = autoStart
        createWebView()
    }

    public func start() {
        guard initialized else {
            autoStart = true
            return
        }
        startCreative()
    }

    public func reset() {
        stopAd()
    }

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

        Task {
            try? await sendMessage(PlayerMessage.RESIZE, args: args)
        }
    }

    // MARK: - Callback setters

    public func onGetMediaState(_ cb: @escaping () -> MediaState) { self.onGetMediaState = cb }
    public func onPlayMedia(_ cb: @escaping () -> Bool) { self.onPlayMedia = cb }
    public func onPauseMedia(_ cb: @escaping () -> Bool) { self.onPauseMedia = cb }
    public func onAddSimid(_ cb: @escaping (WKWebView) -> Void) { self.onAddSimid = cb }
    public func onShowSimid(_ cb: @escaping (Bool) -> Void) { self.onShowSimid = cb }
    public func onResizeSimid(_ cb: @escaping (Dimensions) -> Bool) { self.onResizeSimid = cb }
    public func onResizePlayer(_ cb: @escaping (Dimensions) -> Void) { self.onResizePlayer = cb }
    public func onOpenClickthrough(_ cb: @escaping (String) -> Void) { self.onOpenClickthrough = cb }
    public func onComplete(_ cb: @escaping (Bool) -> Void) { self.onComplete = cb }

    // MARK: - PostMessage bridge (SimidComponent override)

    override func postMessage(_ message: String) {
        SimidLogger.d("[SIMID][Player][S] \(message)")
        
        Task { @MainActor in
            guard let webView = self.webView else { return }

            let script = "window.originalPostMessage('\(message)', '*');"
            webView.evaluateJavaScript(script, completionHandler: nil)
        }
    }

    // MARK: - WebView setup

    private func createWebView() {
        guard viewController != nil else { return }

        let config = WKWebViewConfiguration()
        let contentController = WKUserContentController()

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

    // MARK: - JS Bridge

    public func userContentController(_ userContentController: WKUserContentController,
                                      didReceive message: WKScriptMessage) {
        guard let messageStr = message.body as? String else { return }
        receiveMessage(messageStr)
    }

    // MARK: - Creative message listeners

    private func addCreativeMessageListeners() {
        addMessageListener(ProtocolMessage.CREATE_SESSION) { [weak self] _ in
            self?.sendInitMessage()
        }

        addMessageListener(CreativeMessage.FATAL_ERROR) { [weak self] _ in
            self?.stopAd(reason: StopCode.CREATIVE_INITIATED)
        }

        addMessageListener(CreativeMessage.GET_MEDIA_STATE) { [weak self] msg in
            guard let self else { return }

            let state = self.onGetMediaState?()
            self.resolveMessage(msg, outgoingArgs: state)
        }

        addMessageListener(CreativeMessage.REQUEST_NAVIGATION) { [weak self] msg in
            guard let self else { return }

            guard let args = msg.args as? CreativeRequestNavigationMessageArgs else {
                self.rejectMessage(msg)
                return
            }

            self.resolveMessage(msg)
            self.onPauseMedia?()
            self.onOpenClickthrough?(args.uri)
        }

        addMessageListener(CreativeMessage.REQUEST_PAUSE) { [weak self] msg in
            guard let self else { return }
            let ok = self.onPauseMedia?() ?? false
            ok ? self.resolveMessage(msg) : self.rejectMessage(msg)
        }

        addMessageListener(CreativeMessage.REQUEST_PLAY) { [weak self] msg in
            guard let self else { return }
            let ok = self.onPlayMedia?() ?? false
            ok ? self.resolveMessage(msg) : self.rejectMessage(msg)
        }

        addMessageListener(CreativeMessage.REQUEST_RESIZE) { [weak self] msg in
            guard let self else { return }

            guard let args = msg.args as? CreativeRequestResizeMessageArgs else {
                self.rejectMessage(msg)
                return
            }

            let creativeDim = args.creativeDimensions
            let mediaDim = args.mediaDimensions ?? args.videoDimensions

            guard let mediaDim else {
                self.rejectMessage(msg)
                return
            }

            let ok = self.onResizeSimid?(creativeDim) ?? false
            guard ok else {
                self.rejectMessage(msg)
                return
            }

            self.creativeDimensions = creativeDim
            self.onResizePlayer?(mediaDim)

            self.resolveMessage(msg)
        }

        addMessageListener(CreativeMessage.REQUEST_SKIP) { [weak self] msg in
            self?.resolveMessage(msg)
            self?.skipAd()
        }

        addMessageListener(CreativeMessage.REQUEST_STOP) { [weak self] msg in
            self?.resolveMessage(msg)
            self?.stopAd()
        }
    }

    // MARK: - Session init/start

    private func startCreative() {
        Task {
            let state = onGetMediaState?()
            nonLinearStartTime = state?.currentTime ?? 0

            try? await sendMessage(PlayerMessage.START_CREATIVE)

            onShowSimid?(true)
            startMediaTimeupdateLoop()
        }
    }

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
            navigationSupport: onOpenClickthrough != nil
                ? NavigationSupport.PLAYER_HANDLES
                : NavigationSupport.AD_HANDLES,
            closeButtonSupport: nil,
            nonlinearDuration: adDuration
        )

        // Escape characters to avoid JSON parsing failure in Creative
        let adParams = adParameters.replacingOccurrences(
            of: "\"",
            with: "\\\""
        )
        
        let creative = CreativeData(
            adParameters: adParams,
            clickThruUrl: ""
        )

        let args = PlayerInitMessageArgs(
            environmentData: env,
            creativeData: creative
        )

        Task {
            do {
                try await sendMessage(PlayerMessage.INIT, args: args)
                initialized = true
                if autoStart { startCreative() }
            } catch {
                stopSession()
            }
        }
    }

    // MARK: - Stop flow

    private func stopAd(reason: Int = StopCode.PLAYER_INITATED) {
        stopSession(skipped: false, reason: reason)
    }

    private func skipAd() {
        stopSession(skipped: true)
    }

    private func stopSession(skipped: Bool = false, reason: Int = StopCode.PLAYER_INITATED) {
        guard !isStopping else { return }
        isStopping = true

        stopMediaLoop()
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

            isStopping = false
        }
    }

    private func completeAd(skipped: Bool) {
        onResizePlayer?(playerDimensions)
        onComplete?(skipped)
        onPlayMedia?()
    }

    private func clearWebView() {
        webView?.removeFromSuperview()
        webView = nil
    }

    // MARK: - Media loop

    private func startMediaTimeupdateLoop() {
        stopMediaLoop()

        mediaTask = Task {
            while true {
                try? await Task.sleep(nanoseconds: mediaTimeupdateInterval * 1_000_000)

                guard let state = onGetMediaState?(),
                      let current = state.currentTime else { continue }

                let args = MediaTimeUpdateMessageArgs(currentTime: current)
                try? await sendMessage(MediaMessage.TIME_UPDATE, args: args)

                SimidLogger.d("[SIMID][Player][MEDIA] \(nonLinearStartTime) \(adDuration) \(current)")
                if adDuration > 0,
                   nonLinearStartTime >= 0,
                   current - nonLinearStartTime > adDuration {
                    stopAd(reason: StopCode.NON_LINEAR_DURATION_COMPLETE)
                    break
                }
            }
        }
    }

    private func stopMediaLoop() {
        mediaTask?.cancel()
        mediaTask = nil
    }
}
