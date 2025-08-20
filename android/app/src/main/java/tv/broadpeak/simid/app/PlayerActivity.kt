package tv.broadpeak.simid.app

import android.animation.ValueAnimator
import android.graphics.Rect
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.view.animation.AccelerateDecelerateInterpolator
import android.webkit.WebView
import android.widget.RelativeLayout
import androidx.activity.enableEdgeToEdge
import androidx.annotation.OptIn
import androidx.appcompat.app.AppCompatActivity
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.datasource.DataSource
import androidx.media3.datasource.DefaultDataSource
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.exoplayer.dash.DashMediaSource
import androidx.media3.exoplayer.hls.HlsMediaSource
import androidx.media3.exoplayer.source.MediaSource
import androidx.media3.ui.PlayerView
import androidx.core.net.toUri
import androidx.media3.common.util.UnstableApi
import tv.broadpeak.simid.controller.MediaState
import tv.broadpeak.smartlib.SmartLib
import tv.broadpeak.smartlib.ad.AdBreakData
import tv.broadpeak.smartlib.ad.AdData
import tv.broadpeak.smartlib.ad.AdManager
import tv.broadpeak.smartlib.ad.simid.GenericSimidControllerApi
import tv.broadpeak.smartlib.session.streaming.StreamingSession
import java.net.URL

// Create a class that extends GenericSimidControllerApi
class BpkSimidController : GenericSimidControllerApi() {
    override fun getSimidControllerName(): String {
        return "Bpk SIMID Controller"
    }
}

class PlayerActivity : AppCompatActivity() {

    private var playerContainer: ViewGroup? = null
    private var playerView: PlayerView? = null

    private var player: ExoPlayer? = null

    private var session: StreamingSession? = null

    private var simidAdData: AdData? = null
    private var simidController: SimidController? = null
    private var bpkSimidController: BpkSimidController? = null

    private var simidWebView: WebView? = null
    private var webViewContainer: ViewGroup? = null

    // Global flag to control animation usage
    private var useAnimations: Boolean = true

    companion object {
        private const val TAG = "Player"
    }

    @OptIn(UnstableApi::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_player)

        playerContainer = findViewById(R.id.playerContainer)
        playerView = findViewById(R.id.playerView)

        val b = intent.extras
        val inputUrl = b?.getString("url") ?: return

        player = ExoPlayer.Builder(this).build()

        player!!.addListener(object : Player.Listener {
            override fun onPlayerError(error: PlaybackException) {
                error.printStackTrace()
            }
        })

        // Attach player to the view
        playerView?.player = player

        initSmartLib(inputUrl)
        loadStream(inputUrl)
    }

    override fun onDestroy() {
        super.onDestroy()
        player?.stop()
    }

    @OptIn(UnstableApi::class)
    private fun loadStream(url: String) {
        val result = session!!.getURL(url)

        val streamUrl = if (result != null) result.url else url

        player?.let { sPlayer ->

            val item = MediaItem.Builder()
                .setUri(streamUrl.toUri())
                .build()

            // Create the source
            val dataSourceFactory: DataSource.Factory = DefaultDataSource.Factory(this)
            val source: MediaSource = if (streamUrl.contains("m3u8")) {
                HlsMediaSource.Factory(dataSourceFactory).createMediaSource(item)
            } else {
                DashMediaSource.Factory(dataSourceFactory).createMediaSource(item)
            }

            sPlayer.setMediaSource(source)
            sPlayer.prepare()
            sPlayer.playWhenReady = true
        }
    }

    private fun initSmartLib(url: String) {
        val domain = URL(url).host

        SmartLib.getInstance().init(this, "", "", domain);

        session = SmartLib.getInstance().createStreamingSession()
        session?.let { sSession ->
            sSession.activateAdvertising()

            sSession.setAdEventsListener(object : AdManager.AdEventsListener {
                override fun onPrepareAdBreak(adBreak: AdBreakData) {
                    Log.d(TAG, "onPrepareAdBreak: ${adBreak.id}")
                }

                override fun onAdBreakBegin(adBreakData: AdBreakData) {
                    Log.d(TAG, "onAdBreakBegin: ${adBreakData.id} ${adBreakData.startPosition} ${adBreakData.duration} ${adBreakData.ads.size}")
                }

                override fun onPrepareAd(adData: AdData, adBreakData: AdBreakData) {
                    Log.d(TAG, "onAdPrepare: ${adData.adId}")
                }

                override fun onAdBegin(adData: AdData, adBreakData: AdBreakData) {
                    Log.d(TAG, "onAdBegin: ${adData.adId} ${adData.startPosition} ${adData.duration} ${adData.index}/${adBreakData.ads.size}")

                    if (adData.nonLinearIframeResources?.size!! > 0) {
                        simidAdData = adData
                        runOnUiThread {
                            val iframeResource = adData.nonLinearIframeResources[0].url
                            val adParameters = adData.nonLinearIframeResources[0].parameters
                            loadSimid(iframeResource, adParameters, (adData.duration.toFloat() / 1000.0F))
                        }
                    }
                }

                override fun onAdSkippable(adData: AdData, adBreakData: AdBreakData, adSkippablePosition: Long, adEndPosition: Long, adBreakEndPosition: Long) {
                    Log.d(TAG, "onAdSkippable: $adSkippablePosition $adEndPosition $adBreakEndPosition")
                }

                override fun onAdEnd(adData: AdData, adBreakData: AdBreakData) {
                    Log.d(TAG, "onAdEnd: ${adData.adId}")
                    if (simidController != null && simidAdData != null) {
                        simidController!!.reset()
                        simidController = null
                        simidAdData = null
                    }
                }

                override fun onAdBreakEnd(adBreakData: AdBreakData) {
                    Log.d(TAG, "onAdBreakEnd: ${adBreakData.id}")
                }
            })

            bpkSimidController = BpkSimidController()

            sSession.attachPlayer(player!!)

            // Attach bpkSimidController to the session
            sSession.attachSimidController(bpkSimidController)
        }
    }

    private fun loadSimid(creativeUri: String, adParameters: String, duration: Float) {

        if (playerContainer == null) {
            return
        }

        // Consider player container dimensions as initial creative dimensions
        val playerRect: Rect = Rect(playerContainer!!.left, playerContainer!!.top, playerContainer!!.width, playerContainer!!.height)

        Log.d(TAG, "Load SIMID: ${playerRect.toShortString()} $creativeUri $duration")

        simidController = SimidController(this, applicationContext, playerRect, creativeUri, adParameters, duration)

        simidController?.let { controller ->
            controller.onGetMediaState { getMediaState() }
            controller.onAddSimid { webView -> addSimidWebView(webView) }
            controller.onShowSimid { show -> showSimidWebView(show) }
            controller.onResizeSimid { dimensions -> resizeSimid(dimensions) }
            controller.onResizePlayer { dimensions -> resizePlayer(dimensions) }
            controller.onComplete { skipped -> completeAd(skipped) }

            controller.simidControllerApi(bpkSimidController!!)

            controller.load()
        }
    }

    private fun getMediaState(): MediaState {
        return MediaState(
            "",
            player?.currentPosition!!.toFloat() / 1000.0F,
            player?.duration!!.toFloat() / 1000.0F,
            false,
            player?.isDeviceMuted,
            player?.isPlaying == false,
            player?.volume,
            true
        )
    }

    private fun addSimidWebView(webView: WebView): Boolean {
        // Do not add WebView in activity (not found a way to add while hiding it totally)
        // Add it in view only when requested to be shown
        simidWebView = webView
        return true
    }

    private fun showSimidWebView(show: Boolean) {
        if (simidWebView == null) {
            return
        }

        runOnUiThread {
            if (show) {
                simidWebView?.visibility = View.VISIBLE

                webViewContainer = RelativeLayout(applicationContext)
                webViewContainer?.apply {
                    layoutParams = RelativeLayout.LayoutParams(
                        RelativeLayout.LayoutParams.MATCH_PARENT,
                        RelativeLayout.LayoutParams.MATCH_PARENT
                    )
                    setPadding(0, 0, 0, 0)
                }

                webViewContainer?.addView(simidWebView)
                playerContainer?.addView(webViewContainer)

            } else if (webViewContainer != null) {
                simidWebView?.loadUrl("about:blank")
                simidWebView?.clearHistory()
                simidWebView?.clearCache(true)
                webViewContainer?.removeView((simidWebView))
                playerContainer?.removeView(webViewContainer)
                webViewContainer = null
            }
        }
    }

    private fun resizeSimid(dimensions: Rect): Boolean {
        if (simidWebView == null) {
            return false
        }

        Log.d(TAG, "Resize SIMID: ${dimensions.toShortString()}")

        // Check if requested SIMID dimensions is not outside original player dimensions
        val playerRect = Rect(playerContainer!!.left, playerContainer!!.top, playerContainer!!.width, playerContainer!!.height)
        val widthFits = dimensions.left + dimensions.width() <= playerRect.width()
        val heightFits = dimensions.top + dimensions.height() <= playerRect.height()
        if (!widthFits || !heightFits) {
            return false;
        }

        runOnUiThread {
            webViewContainer?.top = dimensions.top
            webViewContainer?.left = dimensions.left
            webViewContainer?.layoutParams?.width = dimensions.width()
            webViewContainer?.layoutParams?.height = dimensions.height()
            webViewContainer?.requestLayout()
        }

        return true
    }

    private fun resizePlayer(dimensions: Rect): Boolean {
        Log.d(TAG, "Resize player: ${dimensions.toShortString()}")

        val playerView = playerView ?: return false
        
        runOnUiThread {
            val currentLayoutParams = playerView.layoutParams as ViewGroup.MarginLayoutParams
            
            if (!useAnimations) {
                // Instant resize without animation
                (playerView.layoutParams as ViewGroup.MarginLayoutParams).apply {
                    leftMargin = dimensions.left
                    topMargin = dimensions.top
                    width = dimensions.width()
                    height = dimensions.height()
                }
                playerView.requestLayout()

            } else {
                // Animated resize
                val currentLeft = currentLayoutParams.leftMargin
                val currentTop = currentLayoutParams.topMargin
                val currentWidth = currentLayoutParams.width
                val currentHeight = currentLayoutParams.height

                val leftAnimator = ValueAnimator.ofInt(currentLeft, dimensions.left)
                val topAnimator = ValueAnimator.ofInt(currentTop, dimensions.top)
                val widthAnimator = ValueAnimator.ofInt(currentWidth, dimensions.width())
                val heightAnimator = ValueAnimator.ofInt(currentHeight, dimensions.height())

                val duration = 300L // Animation duration in milliseconds

                leftAnimator.apply {
                    addUpdateListener { animation ->
                        val value = animation.animatedValue as Int
                        (playerView.layoutParams as ViewGroup.MarginLayoutParams).leftMargin = value
                        playerView.requestLayout()
                    }
                    interpolator = AccelerateDecelerateInterpolator()
                    this.duration = duration
                    start()
                }

                topAnimator.apply {
                    addUpdateListener { animation ->
                        val value = animation.animatedValue as Int
                        (playerView.layoutParams as ViewGroup.MarginLayoutParams).topMargin = value
                        playerView.requestLayout()
                    }
                    interpolator = AccelerateDecelerateInterpolator()
                    this.duration = duration
                    start()
                }

                widthAnimator.apply {
                    addUpdateListener { animation ->
                        val value = animation.animatedValue as Int
                        playerView.layoutParams.width = value
                        playerView.requestLayout()
                    }
                    interpolator = AccelerateDecelerateInterpolator()
                    this.duration = duration
                    start()
                }

                heightAnimator.apply {
                    addUpdateListener { animation ->
                        val value = animation.animatedValue as Int
                        playerView.layoutParams.height = value
                        playerView.requestLayout()
                    }
                    interpolator = AccelerateDecelerateInterpolator()
                    this.duration = duration
                    start()
                }
            }
        }

        return true
    }

    private fun completeAd(skipped: Boolean) {
        Log.d(TAG, "Complete ad, skipped: $skipped")
        if (skipped && simidAdData != null) {
            skipCurrentAd(simidAdData!!)
        }
        simidController = null
    }

    private fun skipCurrentAd(adData: AdData) {
        player!!.seekTo(adData.startPosition + adData.duration)
    }
}
