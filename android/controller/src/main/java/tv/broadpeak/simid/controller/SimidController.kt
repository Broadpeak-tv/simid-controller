package tv.broadpeak.simid.controller

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.graphics.Bitmap
import android.graphics.Color
import android.util.Log
import android.view.View
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.RelativeLayout
import kotlinx.coroutines.Job
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.serialization.json.decodeFromJsonElement
import kotlinx.serialization.json.encodeToJsonElement

/**
 * Callback function called to retrieve current media state.
 * @return the current media state
 */
typealias GetMediaStateCallback = () -> MediaState

/**
 * Callback function called when the main video has to be played or resumed.
 * @return true if main video successfully played or resumed
 */
typealias PlayMediaCallback = () -> Boolean

/**
 * Callback function called when the main video has to be paused.
 * @return true if main video successfully played or resumed
 */
typealias PauseMediaCallback = () -> Boolean

/**
 * Callback function called when a new SIMID WebView has to be added in application.
 * @param webview the SIMID WebView
 * @return true if SIMID WebView has been successfully added, false otherwise
 */
typealias AddSimidCallback = (webview: WebView) -> Boolean

/**
 * Callback function called when the SIMID WebView has to be shown or hidden.
 * @param show true to show the SIMID WebView, false to hide it
 */
typealias ShowSimidCallback = (show: Boolean) -> Unit

/**
 * Callback function called when the SIMID WebView has to be resized.
 * @param dimensions the new SIMID WebView dimensions
 * @return true if the SIMID WebView has been successfully resized, false otherwise
 */
typealias ResizeSimidCallback = (dimensions: Dimensions) -> Boolean

/**
 * Callback function called when the media player element has to be resized.
 * @param dimensions the new player dimensions
 */
typealias ResizePlayerCallback = (dimensions: Dimensions) -> Unit

/**
 * Callback function called when the creative requests navigation to an external URI.
 * Used in mobile app environments where the player manages external URL navigation.
 * The player must open the URI and the callback is invoked after resolve is sent to the creative.
 * @param uri the external URI to open
 */
typealias OpenPageCallback = (uri: String) -> Unit

/**
 * Callback function called when the current SIMID has completed.
 * @param skipped true when SIMID has been skipped and terminated by the user
 */
typealias CompleteCallback = (skipped: Boolean) -> Unit

/**
 * Callback function called when an error occurred.
 * @param messageType the message type that caused/sent the error
 * @param errorCode the error code
 * @param errorMEssage the error message
 */
typealias ErrorCallback = (messageType: String, errorCode: Int, errorMessage: String) -> Unit

/**
 * Set up the SIMID controller an starts listening for messages from the creative.
 * @param playerDimensions the main player dimensions
 * @param creativeDimensions the initial creative dimensions the application/player will set
 * @param creativeUri The creative URI
 * @param creativeData the creative data (ad parameters, clickThruUrl)
 * @param adDuration the display duration of the creative (0 by default, meaning no requested duration)
 * @param adSkippable true if the linear ad is skippable (false by default)
 * @param mediaTimeupdateInterval the interval in ms to send media timeupdate message to the creative (250ms by default, -1 to disable)
 */
public open class SimidController (
    private val activity: Activity,
    private val context: Context,
    private var playerDimensions: Dimensions,
    private var creativeDimensions: Dimensions,
    private val creativeUri: String,
    private val creativeData: CreativeData,
    private val adDuration: Float = 0.0F,
    private val adSkippable: Boolean = false,
    private val mediaTimeupdateInterval: Long = MEDIA_TIMEUPDATE_INTERVAL_MS
) : SimidComponent(SIMID_COMPONENT_TYPE) {

    companion object {
        private const val TAG = "SimidController"
        private const val SIMID_COMPONENT_TYPE = "Player"
        public const val VERSION = BuildConfig.VERSION
        public const val MEDIA_TIMEUPDATE_INTERVAL_MS = 250L
    }

    // The WebView used to load the SIMID creative
    private var webView: WebView? = null

    private var _autoStart: Boolean = true
    private var _initialized: Boolean = false

    private var _nonLinearStartTime: Float = 0.0F
    private var _isStopping: Boolean = false
    private var _timerMediaTimeupdate: Job? = null

    private var onGetMediaState: GetMediaStateCallback? = null
    private var onPlayMedia: PlayMediaCallback? = null
    private var onPauseMedia: PauseMediaCallback? = null
    private var onAddSimid: AddSimidCallback? = null
    private var onShowSimid: ShowSimidCallback? = null
    private var onResizeSimid: ResizeSimidCallback? = null
    private var onResizePlayer: ResizePlayerCallback? = null
    private var onOpenPage: OpenPageCallback? = null
    private var onComplete: CompleteCallback? = null
    private var onError: ErrorCallback? = null

    private val mainScope = MainScope()

    init {
        addCreativeMessageListeners()
    }

    //region Callbacks
    /**
     * Set the callback function called to retrieve current media state.
     * @param cb the callback function
     */
    fun onGetMediaState(cb: GetMediaStateCallback) {
        this.onGetMediaState = cb
    }

    /**
     * Set the callback function called when the main video has to be played or resumed.
     * @param cb the callback function
     */
    fun onPlayMedia(cb: PlayMediaCallback) {
        this.onPlayMedia = cb
    }

    /**
     * Set the callback function called when the main video has to be paused.
     * @param cb the callback function
     */
    fun onPauseMedia(cb: PauseMediaCallback) {
        this.onPauseMedia = cb
    }

    /**
     * Set the callback function called when a new SIMID WebView has to be added in application.
     * @param cb the callback function
     */
    fun onAddSimid(cb: AddSimidCallback) {
        this.onAddSimid = cb
    }

    /**
     * Set the callback function called when the SIMID WebView has to be shown or hidden.
     * @param cb the callback function
     */
    fun onShowSimid(cb: ShowSimidCallback) {
        this.onShowSimid = cb
    }

    /**
     * Set the callback function called when the SIMID WebView has to be resized.
     * @param cb the callback function
     */
    fun onResizeSimid(cb: ResizeSimidCallback) {
        this.onResizeSimid = cb
    }

    /**
     * Set the callback function called when the media player element has to be resized.
     * @param cb the callback function
     */
    fun onResizePlayer(cb: ResizePlayerCallback) {
        this.onResizePlayer = cb
    }

    /**
     * Set the callback function called when the creative requests navigation to an external URI.
     * Used in mobile app environments where the player manages external URL navigation.
     * The player must open the URI and the callback is invoked after resolve is sent to the creative.
     * @param cb the callback function
     */
    fun onOpenPage(cb: OpenPageCallback) {
        this.onOpenPage = cb
    }

    /**
     * Set the callback function called when the current SIMID has completed.
     * @param cb the callback function
     */
    fun onComplete(cb: CompleteCallback) {
        this.onComplete = cb
    }

    /**
     * Set the callback function called when an error occurred.
     * @param cb the callback function
     */
    fun onError(cb: ErrorCallback) {
        this.onError = cb
    }
    //endregion Callbacks

    @SuppressLint("SetJavaScriptEnabled")
    /*
     * Return the current SIMID controller version.
     * @return the current SIMID controller version
     */
    fun getVersion(): String {
        return VERSION
    }

    /**
     * Initialize and load ad. This should be called before an ad plays.
     * Create a WebView and load the SIMID creative.
     * @param autoStart true to start the creative once initialized
     */
    fun load(autoStart: Boolean = true) {
        _autoStart = autoStart
        createWebView()
    }

    /**
     * Start the loaded creative
     */
    fun start() {
        if (!_initialized) {
            // start() my be called before creative has been fully initialized, then start it automatically when ready
            _autoStart = true
            return
        }
        startCreative()
    }

    /**
     * Stop and reset the SIMID session.
     */
    fun reset() {
        stopAd()
    }

    /**
     * Notify the SIMID controller any changes any of ad components’ size.
     * @param playerDimensions the new player dimensions
     * @param creativeDimensions the new creative dimensions
     * @param fullscreen true if in fullscreen mode
     */
    fun notifyResize(playerDimensions: Dimensions, creativeDimensions: Dimensions, fullscreen: Boolean) {
        if (!this._initialized) {
            return
        }
        this.playerDimensions = playerDimensions
        this.creativeDimensions = creativeDimensions
        val args = PlayerResizeMessageArgs(playerDimensions, creativeDimensions, fullscreen)
        this.sendMessage(PlayerMessage.RESIZE, json.encodeToJsonElement(args))
    }

    override fun postMessage(message: String) {
        Log.v(TAG, "[SIMID][Player][S]: $message")

        val script =
            """
            window.originalPostMessage('$message', '*');
            """.trimIndent()

        activity.runOnUiThread {
            webView?.evaluateJavascript(script, null)
        }
    }

    private fun addCreativeMessageListeners() {
        this.addMessageListener(ProtocolMessage.CREATE_SESSION, ::onCreateSession)
        this.addMessageListener(CreativeMessage.FATAL_ERROR, ::onCreativeFatalError)
        this.addMessageListener(CreativeMessage.GET_MEDIA_STATE, ::onCreativeGetMediaState)
        this.addMessageListener(CreativeMessage.REQUEST_PAUSE, ::onCreativeRequestPause)
        this.addMessageListener(CreativeMessage.REQUEST_PLAY, ::onCreativeRequestPlay)
        this.addMessageListener(CreativeMessage.REQUEST_RESIZE, ::onCreativeRequestResize)
        this.addMessageListener(CreativeMessage.REQUEST_SKIP, ::onCreativeRequestSkip)
        this.addMessageListener(CreativeMessage.REQUEST_STOP, ::onCreativeRequestStop)
        this.addMessageListener(CreativeMessage.EXPAND_NONLINEAR, ::onCreativeExpandNonlinear)
        this.addMessageListener(CreativeMessage.COLLAPSE_NONLINEAR, ::onCreativeCollapseNonlinear)
        this.addMessageListener(CreativeMessage.CLICK_THRU, ::onCreativeClickThru)
        this.addMessageListener(CreativeMessage.REQUEST_NAVIGATION, ::onCreativeRequestNavigation)
    }

    //region CREATIVE MESSAGE HANDLERS
    private fun onCreateSession(message: Message) {
        // [3] - createSession sent by the creative (message resolved in SimidComponent::receiveMessage())
        // [4] - send Player:init message
        sendInitMessage()
    }

    private fun onCreativeFatalError(message: Message) {
        val args: CreativeFatalErrorMessageArgs = json.decodeFromJsonElement<CreativeFatalErrorMessageArgs>(message.args!!)
        onError?.invoke(CreativeMessage.FATAL_ERROR, args.errorCode, args.errorMessage)
        this.stopAd(StopCode.CREATIVE_INITIATED)
    }

    private fun onCreativeGetMediaState(message: Message) {
        activity.runOnUiThread {
            val mediaState: MediaState? = onGetMediaState?.invoke()
            this.resolveMessage(message, json.encodeToJsonElement(mediaState))
        }
    }

    private fun onCreativeRequestPause(message: Message) {
        if (!_initialized) {
            Log.w(TAG, "Session not initialized, requestPause ignored")
            return
        }
        if (onPauseMedia?.invoke() == true) resolveMessage(message) else rejectMessage(message)
    }

    private fun onCreativeRequestPlay(message: Message) {
        if (!_initialized) {
            Log.w(TAG, "Session not initialized, requestPlay ignored")
            return
        }
        if (onPlayMedia?.invoke() == true) resolveMessage(message) else rejectMessage(message)
    }

    private fun onCreativeRequestResize(message: Message) {
        if (onResizeSimid == null || onResizePlayer == null) {
            this.rejectMessage(message, PlayerErrorCode.UNSPECIFIED, "Resize not supported by the player")
            return
        }
        val args: CreativeRequestResizeMessageArgs = json.decodeFromJsonElement<CreativeRequestResizeMessageArgs>(message.args!!)

        val creativeDimensions = args.creativeDimensions
        // Add compatibility with SIMID v1.0
        val mediaDimensions = args.mediaDimensions ?: args.videoDimensions

        if (mediaDimensions == null) {
            this.rejectMessage(message, PlayerErrorCode.UNSPECIFIED, "Missing input dimensions to resize")
            return
        }

        // Resize SIMID iframe
        if (onResizeSimid?.invoke(creativeDimensions) == false) {
            rejectMessage(message, PlayerErrorCode.UNSPECIFIED, "The player is unable to complete the Creative resizing")
            return
        }
        // Store creative dimensions (reused when collapsed)
        this.creativeDimensions = creativeDimensions

        // If creative successfully resized then resize the main player
        onResizePlayer?.invoke(mediaDimensions)

        resolveMessage(message)
    }

    private fun onCreativeExpandNonlinear(message: Message) {
        if (!_initialized) {
            Log.w(TAG, "Session not initialized, expandNonlinear ignored")
            return
        }
        // Under normal circumstances, the player pauses the media.
        // In cases when the content is video, the player resizes the creative iframe to the dimensions of the video
        // and places the expanded creative at video zero coordinates.
        onPauseMedia?.invoke()
        if (onResizeSimid?.invoke(playerDimensions) == true)
            resolveMessage(message) else
                rejectMessage(message, PlayerErrorCode.UNSPECIFIED, "Unable to expand nonlinear ad")
    }

    private fun onCreativeCollapseNonlinear(message: Message) {
        if (!_initialized) {
            Log.w(TAG, "Session not initialized, collapseNonlinear ignored")
            return
        }
        // The player resizes the ad to its original state and resumes the content media playback.
        onPlayMedia?.invoke()
        if (onResizeSimid?.invoke(creativeDimensions) == true)
            resolveMessage(message) else
            rejectMessage(message, PlayerErrorCode.UNSPECIFIED, "Unable to collapse nonlinear ad")
    }

    private fun onCreativeRequestSkip(message: Message) {
        resolveMessage(message)
        skipAd()
    }

    protected fun onCreativeRequestStop(message: Message) {
        this.resolveMessage(message)
        stopAd(StopCode.CREATIVE_INITIATED)
    }

    private fun onCreativeClickThru(message: Message) {
        val args: CreativeClickThruMessageArgs = json.decodeFromJsonElement<CreativeClickThruMessageArgs>(message.args!!)

        // Open landing page only when playerHandles is true
        if (!(args.playerHandles ?: false)) {
            return
        }

        val uri = args.uri ?: args.url // url deprecated in favor of uri
        this.onOpenUri(message, args.url)
    }
    private fun onCreativeRequestNavigation(message: Message) {
        val args: CreativeRequestNavigationMessageArgs = json.decodeFromJsonElement<CreativeRequestNavigationMessageArgs>(message.args!!)
        this.onOpenUri(message, args.uri)
    }
    //endregion CREATIVE MESSAGE HANDLERS

    //region IFRAME/WEBVIEW MANAGEMENT
    private fun createWebView() {
        activity.runOnUiThread {

//            WebView.setWebContentsDebuggingEnabled(true)

            webView = WebView(context);

            webView?.let { sWebView ->

                sWebView.apply {
                    layoutParams = RelativeLayout.LayoutParams(
                        RelativeLayout.LayoutParams.MATCH_PARENT,
                        RelativeLayout.LayoutParams.MATCH_PARENT
                    )
                    setPadding(0, 0, 0, 0)
                    visibility = View.GONE
                    isFocusable = true
                    isFocusableInTouchMode = true
                    webViewClient = WebViewClient()
                    webChromeClient = WebChromeClient()
                    settings.javaScriptEnabled = true
                    settings.domStorageEnabled = true
                    settings.mediaPlaybackRequiresUserGesture = false
                    settings.useWideViewPort = true
                }

                sWebView.setBackgroundColor(Color.TRANSPARENT);

                sWebView.addJavascriptInterface(object {
                    @android.webkit.JavascriptInterface
                    fun postMessage(message: String) {
                        receiveMessage(message)
                    }
                }, "Android")

                sWebView.webViewClient = object : WebViewClient() {
                    override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                        super.onPageStarted(view, url, favicon)
                        view?.evaluateJavascript(
                            """
                            console.log("[Android] override postMessage")
                            window.originalPostMessage = window.postMessage;
                            window.postMessage = function(message) {
                                // Send the message to the Android interface
                                Android.postMessage(message);
                            };
                            """.trimIndent(), null
                        )
                    }
                }

                sWebView.loadUrl(creativeUri)
                sWebView.requestFocus()

                onAddSimid?.invoke(sWebView)
            }
        }
    }
    //endregion IFRAME/WEBVIEW MANAGEMENT

    private fun logMessage(message: String) {
        activity.runOnUiThread {
            webView?.evaluateJavascript("console.log('$message');", null)
        }
    }

    /**********************************************************************************************
     * MESSAGE LISTENERS
     *********************************************************************************************/

    private fun sendInitMessage() {
        // [4] - send Player:init message

        val environmentData = EnvironmentData(
            playerDimensions,
            creativeDimensions,
            false,
            true,
            true,
            if (adSkippable) SkippableState.AD_HANDLES else SkippableState.NOT_SKIPPABLE,
            null,
            protocolVersion,
            null, // This is not relevant on desktop
            null, // This should be filled in for sdks and players
            null, // This should be filled in on mobile
            null, // This should be filled in on mobile
            false, // player.isDeviceMuted,
            1.0F, // player.volume,
            if (this.onOpenPage != null) NavigationSupport.PLAYER_HANDLES else NavigationSupport.AD_HANDLES,
            null, // CloseButtonSupport.AD_HANDLES,
            adDuration
        )

        // Escape characters to avoid JSON parsing failure in Creative
        val adParams = this.creativeData.adParameters.replace("\"", "\\\"")

        val creativeData = CreativeData(adParams, this.creativeData.clickThruUrl)
        val args = PlayerInitMessageArgs(environmentData, creativeData)

        mainScope.launch {
            try {
                sendMessage(PlayerMessage.INIT, json.encodeToJsonElement(args)).await()
                _initialized = true
                if (_autoStart) {
                    startCreative()
                }
            } catch (e: RejectException) {
                Log.v(TAG, "Init failed: $e")
                onError?.invoke(PlayerMessage.INIT, e.errorCode, e.message)
                stopSession()
            }
        }
    }

    private fun startCreative() {
        mainScope.launch {
            val mediaState = onGetMediaState?.invoke()
            _nonLinearStartTime = mediaState?.currentTime!!
        }

        mainScope.launch {
            try {
                sendMessage(PlayerMessage.START_CREATIVE).await()
                onShowSimid?.invoke(true)
                startMediaTimeupdateInterval()
            } catch (e: RejectException) {
                Log.v(TAG, "Failed to start creative: " + e.message)
                onError?.invoke(PlayerMessage.START_CREATIVE, e.errorCode, e.message)
            }
        }
    }

    private fun stopAd(reason: Int = StopCode.PLAYER_INITATED) {
        if (webView == null) {
            return
        }
        stopSession(false, reason)
    }

    private fun skipAd() {
        if (webView == null) {
            return
        }
        stopSession(true)
    }

    /**
     * Stop/reset session
     * Remove and destroy the SIMID creative iframe and resumes video playback.
     */
    private fun stopSession(skipped: Boolean = false, reason: Int = StopCode.PLAYER_INITATED) {
        if (_isStopping || webView == null) {
            resetSession()
            return
        }
        _isStopping = true
        stopMediaTimeupdateInterval()
        onShowSimid?.invoke(false)

        completeAd(skipped)

        // Wait for the SIMID creative to acknowledge stop and then clean up the iframe.
        mainScope.launch {
            if (_initialized) {
                (when (skipped) {
                    true -> sendMessage(PlayerMessage.AD_SKIPPED)
                    false -> sendMessage(PlayerMessage.AD_STOPPED, json.encodeToJsonElement(PlayerAdStoppedMessageArgs(reason)))
                }).await()
            }
            clearWebView()
            resetSession()
        }
    }

    private fun clearWebView() {
        webView?.loadUrl("about:blank")
        webView?.clearHistory()
        webView?.clearCache(true)
        webView = null
    }

    private fun completeAd(skipped: Boolean = false) {
        // Resize the main player to its original dimensions
        onResizePlayer?.invoke(playerDimensions)

        // Notify player ad is complete, if skipped this enables player to seek after the current linear ad
        onComplete?.invoke(skipped)
    }

    //region MAIN VIDEO STATE
    private fun startMediaTimeupdateInterval() {
        stopMediaTimeupdateInterval()

        if (mediaTimeupdateInterval == -1L) {
            return
        }
        if (adDuration <= 0) {
            return
        }

        _timerMediaTimeupdate = mainScope.launch {
            while (true) {
                val mediaState = onGetMediaState?.invoke()
                if (mediaState != null) {
                    mediaTimeUpdated(mediaState.currentTime!!)
                }
                delay(mediaTimeupdateInterval)
            }
        }
    }

    private fun stopMediaTimeupdateInterval() {
        _timerMediaTimeupdate?.cancel()
        _timerMediaTimeupdate = null
    }

    private fun mediaTimeUpdated(currentTime: Float) {

        this.sendMessage(MediaMessage.TIME_UPDATE, json.encodeToJsonElement(MediaTimeUpdateMessageArgs(currentTime)))

        // For nonlinear ads, stop the ad once requested duration is over
        if (adDuration > 0 &&
            _nonLinearStartTime > 0 &&
            currentTime - _nonLinearStartTime > adDuration) {
            _nonLinearStartTime = 0.0F
            stopAd(StopCode.NON_LINEAR_DURATION_COMPLETE)
        }
    }
    //endregion MAIN VIDEO STATE

    // region CLICK THROUGH
    private fun onOpenUri(message: Message, uri: String?) {
        if (uri == null) {
            this.rejectMessage(message, PlayerErrorCode.NAVIGATION_NOT_SUPPORTED, "Invalid URI")
            return
        }

        if (this.onOpenPage == null) {
            this.rejectMessage(message, PlayerErrorCode.NAVIGATION_NOT_SUPPORTED, "Navigation not supported by the player")
            return
        }

        // Spec §4.4.12.1: resolve before opening the window so the creative receives
        // the message prior to the app being backgrounded.
        this.resolveMessage(message)

        this.onPauseMedia?.invoke()
        this.onOpenPage?.invoke(uri)
    }
    // endregion CLICK THROUGH
}
