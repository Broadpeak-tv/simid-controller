package tv.broadpeak.simid.app

import android.animation.ValueAnimator
import android.graphics.Rect
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.view.animation.AccelerateDecelerateInterpolator
import android.webkit.WebView
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

    private var adDatas: MutableMap<String, AdData>  = mutableMapOf()
    private var simidControllers: MutableMap<String, SimidController>  = mutableMapOf()
    private var simidWebViews: MutableMap<String, WebView>  = mutableMapOf()

    private var bpkSimidController: BpkSimidController? = null

    // Global flag to control animation usage
    private var useAnimations: Boolean = true

    companion object {
        private const val TAG = "Player"

        private const val ANIMATION_DURATION_MS = 300L
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
        simidControllers.forEach { (key, controller) ->  controller.reset() }
        simidControllers.clear()
        player?.stop()
        SmartLib.getInstance().release();
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

                    adDatas[adData.adId] = adData
                    if (adData.nonLinearIframeResources?.size!! > 0) {
                        runOnUiThread {
                            val iframeResource = adData.nonLinearIframeResources[0].url
                            val adParameters = adData.nonLinearIframeResources[0].parameters
                            loadSimid(adData.adId, iframeResource, adParameters, (adData.duration.toFloat() / 1000.0F))
                        }
                    }
                }

                override fun onAdBegin(adData: AdData, adBreakData: AdBreakData) {
                    Log.d(TAG, "onAdBegin: ${adData.adId} ${adData.startPosition} ${adData.duration} ${adData.index}/${adBreakData.ads.size}")

                    val simidController = simidControllers[adData.adId]
                    if (simidController != null) {
                        runOnUiThread {
                            simidController.start()
                        }
                    }
                }

                override fun onAdSkippable(adData: AdData, adBreakData: AdBreakData, adSkippablePosition: Long, adEndPosition: Long, adBreakEndPosition: Long) {
                    Log.d(TAG, "onAdSkippable: $adSkippablePosition $adEndPosition $adBreakEndPosition")
                }

                override fun onAdEnd(adData: AdData, adBreakData: AdBreakData) {
                    Log.d(TAG, "onAdEnd: ${adData.adId}")
                    val simidController = simidControllers[adData.adId]
                    if (simidController != null) {
                        simidController.reset()
                        simidControllers.remove(adData.adId)
                        removeWebView(adData.adId)
                    }
                    adDatas.remove(adData.adId)
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

    private fun loadSimid(adId: String, creativeUri: String, adParameters: String, duration: Float) {

        if (playerContainer == null) {
            return
        }

        // Consider player container dimensions as initial creative dimensions
        val playerRect: Rect = Rect(playerContainer!!.left, playerContainer!!.top, playerContainer!!.width, playerContainer!!.height)

        Log.d(TAG, "Load SIMID: ${playerRect.toShortString()} $creativeUri $duration")

        val simidController = SimidController(this, applicationContext, playerRect, playerRect, creativeUri, adParameters, duration)

        simidController.let { controller ->
            controller.onAddSimid { webView -> addSimidWebView(adId, webView) }
            controller.onShowSimid { show -> showSimidWebView(adId, show) }
            controller.onResizeSimid { dimensions -> resizeSimid(adId, dimensions) }
            controller.onResizePlayer { dimensions -> resizePlayer(dimensions) }
            controller.onGetMediaState { getMediaState() }
            controller.onPauseMedia { pauseMedia() }
            controller.onPlayMedia { playMedia() }
            controller.onComplete { skipped -> completeAd(adId, skipped) }

            controller.simidControllerApi(bpkSimidController!!)

            Log.d(TAG, "Load SIMID controller v${controller.getVersion()} and creative from $creativeUri")
            controller.load(false)

            simidControllers[adId] = controller
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

    private fun addSimidWebView(adId: String, webView: WebView): Boolean {
        simidWebViews[adId] = webView
        playerContainer?.addView(webView)
        return true
    }

    private fun removeWebView(adId: String) {
        val webView = simidWebViews[adId]
        webView?.let {
            runOnUiThread {
                playerContainer?.removeView(webView)
            }
        }
    }

    private fun showSimidWebView(adId: String, show: Boolean) {
        val webView = simidWebViews[adId]
        webView?.let {
            runOnUiThread {
                webView.visibility = if (show) View.VISIBLE else View.GONE
            }
        }
    }

    private fun resizeSimid(adId: String, dimensions: Rect): Boolean {
        Log.d(TAG, "Resize SIMID: ${dimensions.toShortString()}")

        val webView = simidWebViews[adId] ?: return false

        // Check if requested SIMID dimensions is not outside original player dimensions
        val playerRect = Rect(playerContainer!!.left, playerContainer!!.top, playerContainer!!.width, playerContainer!!.height)
        val widthFits = dimensions.left + dimensions.width() <= playerRect.width()
        val heightFits = dimensions.top + dimensions.height() <= playerRect.height()
        if (!widthFits || !heightFits) {
            return false;
        }

        resizeView(webView, dimensions, false)
        return true
    }

    private fun resizePlayer(dimensions: Rect): Boolean {
        Log.d(TAG, "Resize player: ${dimensions.toShortString()}")
        val playerView = playerView ?: return false
        resizeView(playerView, dimensions, useAnimations)
        return true
    }

    private fun resizeView(view: View, dimensions: Rect, animate: Boolean) {
        runOnUiThread {
            if (!animate) {
                // Instant resize without animation
                (view.layoutParams as ViewGroup.MarginLayoutParams).apply {
                    leftMargin = dimensions.left
                    topMargin = dimensions.top
                    width = dimensions.width()
                    height = dimensions.height()
                }
                view.requestLayout()
            } else {
                // Animated resize
                val from = Rect(view.left, view.top, view.width, view.height)

                ValueAnimator.ofFloat(0f, 1f).apply {
                    this.duration = ANIMATION_DURATION_MS
                    this.interpolator = AccelerateDecelerateInterpolator()
                    addUpdateListener { va ->
                        val f = va.animatedFraction
                        (view.layoutParams as ViewGroup.MarginLayoutParams).apply {
                            leftMargin = (from.left + (dimensions.left - from.left) * f).toInt()
                            topMargin = (from.top + (dimensions.top - from.top) * f).toInt()
                            width = (from.width() + (dimensions.width() - from.width()) * f).toInt()
                            height = (from.height() + (dimensions.height() - from.height()) * f).toInt()
                        }
                        view.requestLayout()
                    }
                }.start()
            }
        }
    }

    private fun pauseMedia(): Boolean {
        Log.d(TAG, "Pause media")
        runOnUiThread {
            player?.pause()
        }
        return true
    }

    private fun playMedia(): Boolean {
        Log.d(TAG, "Play media")
        runOnUiThread {
            player?.play()
        }
        return true
    }

    private fun completeAd(adId: String, skipped: Boolean) {
        Log.d(TAG, "Complete ad $adId, skipped: $skipped")
        val adData = adDatas[adId]
        if (skipped && adData != null) {
            skipCurrentAd(adData)
        }
    }

    private fun skipCurrentAd(adData: AdData) {
        runOnUiThread {
            player!!.seekTo(adData.startPosition + adData.duration)
        }
    }
}
