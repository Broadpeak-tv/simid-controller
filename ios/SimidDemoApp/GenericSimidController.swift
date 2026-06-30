import SmartLib
import SimidSDK

class GenericSimidController: SimidController {
    
    private var simidControllerApi: GenericSimidControllerApi?
    
    public override init(
        playerDimensions: Dimensions,
        creativeDimensions: Dimensions,
        creativeUri: String,
        adParameters: String = "",
        adDuration: Double = 0,
        adSkippable: Bool = false,
        mediaTimeupdateInterval: UInt64 = SimidController.MEDIA_TIMEUPDATE_INTERVAL_MS
    ) {
        super.init(playerDimensions: playerDimensions,
                   creativeDimensions: creativeDimensions,
                   creativeUri: creativeUri,
                   adParameters: adParameters,
                   adDuration: adDuration,
                   adSkippable: adSkippable,
                   mediaTimeupdateInterval: mediaTimeupdateInterval
        )
    }

    func simidControllerApi(_ controllerApi: GenericSimidControllerApi) {
        self.simidControllerApi = controllerApi
    }

    override nonisolated func receiveMessage(_ messageStr: String) {
        Task { @MainActor in
            self.simidControllerApi?.onMessageReceived(messageStr)
        }
        super.receiveMessage(messageStr)
    }

    override nonisolated func postMessage(_ message: String) {
        Task { @MainActor in
            self.simidControllerApi?.onMessageSent(message)
        }
        super.postMessage(message)
    }
}
