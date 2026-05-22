import UIKit
import AVKit
import AVFoundation
import WebKit
import SmartLib
import SimidSDK

final class PlayerViewController: UIViewController, AdEventsListener {

    var asset: Asset?
    
    // MARK: - UI

    private let containerView = UIView()
    private let playerVC = AVPlayerViewController()
    private let playerContainerView = UIView()

    // MARK: - Player

    private var player: AVPlayer?

    // MARK: - SmartLib
    
    private var session: StreamingSession?
    
    // MARK: - SIMID

    private var simidControllers: [String: SimidController] = [:]
    private var simidWebViews: [String: WKWebView] = [:]

    // MARK: - Lifecycle

    override func viewDidLoad() {
        super.viewDidLoad()

        setupUI()
        setupPlayer()
        setupSmartLib()
        loadStream()

        if (asset?.simidURL != nil) {
            DispatchQueue.main.asyncAfter(deadline: .now() + 5) { [weak self] in
                guard let self else { return }

                self.loadSimid(
                    adId: "simid-ad",
                    creativeUri: (asset?.simidURL)!.absoluteString,
                    adParameters: (asset?.adParameters)!,
                    duration: 10.0
                )
            }
        }
    }

    // MARK: - UI

    private func setupUI() {
        view.backgroundColor = .black

        containerView.frame = view.bounds
        containerView.autoresizingMask = [
            .flexibleWidth,
            .flexibleHeight
        ]

        view.addSubview(containerView)

        // Add player container over player controller to enable resizing (and animation?)
        playerContainerView.frame = containerView.bounds
        playerContainerView.backgroundColor = .black

        containerView.addSubview(playerContainerView)
        
        // PlayerVC
        addChild(playerVC)

        let playerView = playerVC.view!
        playerView.frame = playerContainerView.bounds
        playerView.autoresizingMask = [
            .flexibleWidth,
            .flexibleHeight
        ]

        playerContainerView.addSubview(playerView)

        playerVC.didMove(toParent: self)
    }

    // MARK: - STREAM
    
    private func setupPlayer() {
        let player = AVPlayer()
        self.player = player
        playerVC.player = player
        playerVC.showsPlaybackControls = true
    }
    
    private func setupSmartLib() {
        SmartLib.initSmartLib("", nanoCDNHost: "", broadpeakDomainNames: "dcv5s0ei7csoc.cloudfront.net")
        session = SmartLib.createStreamingSession()
        
        guard let session else { return }
        
        session.activateAdvertising()
        session.setAdEventsListener(self)
        session.attachPlayer(player)
        
    }

    private func loadStream() {
        guard let url = asset?.url else { return }
        guard let player else { return }
        guard let session else { return }

        let result = session.getURL(url.absoluteString)
        
        if (result.isError()) {
            session.stop()
            return
        }

        guard let streamUrl = URL(string: result.getURL()) else { return }
        player.replaceCurrentItem(with: AVPlayerItem(url: streamUrl))
        player.play()
    }
    
    // MARK- SMARTLIB AD EVENTS
    
    /// Triggered 3s before an ad break begin
    func onPrepareAdBreak(_ adBreak: AdBreakData) {
        print("[AD] onPrepareAdBreak \(adBreak)")
    }

    /// Triggered 3s before an ad begin
    func onPrepareAd(_ adData: AdData, adBreakData: AdBreakData) {
        print("[AD] onPrepareAd \(adData)")
    }

    /// Triggered when ad breaks begin
    func onAdBreakBegin(_ adBreak: AdBreakData) {
        // Lock player controls
    }

    /// Triggered when an ad begin
    func onAdBegin(_ adData: AdData,
                   adBreakData: AdBreakData) {
        print("[AD] onAdBegin \(adData)")
        if (adData.nonLinearIframeResources.isEmpty) { return }
        guard let iframeResource = adData.nonLinearIframeResources.first else { return }
        
        DispatchQueue.main.async {
            self.loadSimid(
                adId: adData.adId,
                creativeUri: iframeResource.url,
                adParameters: iframeResource.parameters,
                duration: Double(adData.duration) / 1000.0
            )
        }
    }

    /// Triggered when an ad is skippable
    func onAdSkippable(_ adData: AdData,
                       adBreakData: AdBreakData,
                       adSkippablePosition: Int,
                       adEndPosition: Int,
                       adBreakEndPosition: Int) {
        // Show skip message/button
        // "Skip ad in x seconds"
    }

    /// Triggered when the ad is ended, not called if skipped
    func onAdEnd(_ adData: AdData,
                 adBreakData: AdBreakData) {
        // Hide ad link, hide ad skip button
    }

    /// Triggered when ad breaks ended, even in case of skipping
    func onAdBreakEnd(_ adBreakData: AdBreakData) {
        // Unlock player controls
        // Hide ad link, hide ad skip button
    }

    // MARK: - SIMID

    func loadSimid(
        adId: String,
        creativeUri: String,
        adParameters: String,
        duration: Double,
        autoStart: Bool = true
    ) {

        let bounds = containerView.bounds

        let dims = Dimensions(
            x: Int(bounds.origin.x),
            y: Int(bounds.origin.y),
            width: Int(bounds.width),
            height: Int(bounds.height)
        )

        let controller = SimidController(
            viewController: self,
            containerView: containerView,
            playerDimensions: dims,
            creativeDimensions: dims,
            creativeUri: creativeUri,
            adParameters: adParameters,
            adDuration: duration
        )

        controller.onAddSimid { [weak self] webView in
            self?.addWebView(adId: adId, webView: webView)
        }

        controller.onShowSimid { [weak self] show in
            self?.showWebView(adId: adId, show: show)
        }

        controller.onResizeSimid { [weak self] dims in
            self?.resizeSimid(adId: adId, dims: dims) ?? false
        }

        controller.onResizePlayer { [weak self] dims in
            self?.resizePlayer(dims: dims)
        }

        controller.onGetMediaState { [weak self] in
            self?.getMediaState() ?? MediaState(
                currentSrc: nil,
                currentTime: 0,
                duration: 0,
                ended: false,
                muted: false,
                paused: true,
                volume: 1,
                fullscreen: true
            )
        }

        controller.onPlayMedia { [weak self] in
            self?.player?.play()
            return true
        }

        controller.onPauseMedia { [weak self] in
            self?.player?.pause()
            return true
        }

        controller.onOpenClickthrough { url in
            if let u = URL(string: url) {
                UIApplication.shared.open(u)
            }
        }

        controller.onComplete { skipped in
            print("[SIMID] Completed skipped:", skipped)
        }

        controller.load(autoStart: autoStart)

        simidControllers[adId] = controller
    }

    // MARK: - WEBVIEW

    private func addWebView(adId: String, webView: WKWebView) {
        DispatchQueue.main.async {

            self.simidWebViews[adId] = webView
            
            print("[SIMID] Add WebView")

            self.containerView.addSubview(webView)

            webView.frame = self.containerView.bounds
            webView.autoresizingMask = [
                .flexibleWidth,
                .flexibleHeight
            ]

            self.containerView.bringSubviewToFront(webView)
        }
    }

    private func showWebView(adId: String, show: Bool) {
        print("[SIMID] Show WebView: \(show)")
        DispatchQueue.main.async {
            self.simidWebViews[adId]?.isHidden = !show
        }
    }

    private func resizeSimid(adId: String, dims: Dimensions) -> Bool {
        guard let webView = simidWebViews[adId] else { return false }

        let rect = CGRect(
            x: dims.x,
            y: dims.y,
            width: dims.width,
            height: dims.height
        )
        print("[SIMID] Resize WebView \(rect)")

        DispatchQueue.main.async {
            UIView.animate(withDuration: 0.25,
                           delay: 0,
                           options: [
                            .curveEaseInOut,
                            .beginFromCurrentState
                           ]) {
                webView.frame = rect
            }
        }

        return true
    }

    private func resizePlayer(dims: Dimensions) {
        let rect = CGRect(
            x: dims.x,
            y: dims.y,
            width: dims.width,
            height: dims.height
        )
        print("[SIMID] Resize player \(rect)")
        
        DispatchQueue.main.async {
            UIView.animate(withDuration: 0.25,
                           delay: 0,
                           options: [
                            .curveEaseInOut,
                            .beginFromCurrentState
                           ]) {
                self.playerContainerView.frame = rect
            }
            print("[SIMID] \(self.containerView.bounds)")
        }
    }

    // MARK: - MEDIA STATE

    private func getMediaState() -> MediaState {
        let time = player?.currentTime().seconds ?? 0
        let duration = player?.currentItem?.duration.seconds ?? 0

        return MediaState(
            currentSrc: nil,
            currentTime: time,
            duration: duration,
            ended: false,
            muted: player?.isMuted,
            paused: player?.timeControlStatus != .playing,
            volume: player?.volume,
            fullscreen: true
        )
    }
}
