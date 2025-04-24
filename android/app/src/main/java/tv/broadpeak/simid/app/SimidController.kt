package tv.broadpeak.simid.app

import android.app.Activity
import android.content.Context
import android.graphics.Rect
import tv.broadpeak.smartlib.ad.simid.GenericSimidControllerApi

class SimidController(
    private val activity: Activity,
    private val context: Context,
    private val mainPlayerDimensions: Rect,
    private val creativeUri: String,
    private val adParameters: String = "",
    private val adDuration: Float = 0.0F,
    private val adSkippable: Boolean = false
) : tv.broadpeak.simid.controller.SimidController(activity, context, mainPlayerDimensions, creativeUri, adParameters, adDuration, adSkippable) {

    private var simidControllerApi: GenericSimidControllerApi? = null

    fun simidControllerApi(controllerApi: GenericSimidControllerApi) {
        this.simidControllerApi = controllerApi
    }

    override fun receiveMessage(messageStr: String) {
        super.receiveMessage(messageStr)
        this.simidControllerApi?.onMessageReceived(messageStr)
    }

    override fun postMessage(message: String) {
        super.postMessage(message)
        this.simidControllerApi?.onMessageSent(message)
    }
}