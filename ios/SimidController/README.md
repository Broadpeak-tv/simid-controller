# SIMID controller for iOS platforms

Library/module that provides a base SIMID controller (a.k.a. as SIMID player) as specified by IAB: https://interactiveadvertisingbureau.github.io/SIMID/simid-1.1.0.html

The SIMID controller component can be integrated into any iOS application in order to load SIMID creatives and to support the SIMID protocol that enables communication with the SIMID creative.

In the main application, when the application wants to load and display a SIMID creative, it has to create a ``SimidController`` class instance from this package ``SimidSDK`` that will create a WebView and load the SIMID creative into a iframe in the ``WKWebView``, communicate with it through the SIMID protocol and trigger the display of the SIMID iframe (visible state, dimensions). 

The following source code illustrates how to instantiate and manage the provided ``SimidController`` along with an ``AVPlayer`` player instance.

```swift
// 1 - Creates SIMID controller 
import SimidSDK
...

let simidController = SimidController(
  playerDimensions: dims,
  creativeDimensions: dims,
  creativeUri: creativeUri,
  adParameters: adParameters,
  adDuration: duration
)

// 2 - Provides callback functions to the SIMID controller which delegates UI process to the application

simidController.onAddSimid { [weak self] webView in
  // Called by the SIMID controller when a SIMID iframe needs to be integrated into current DOM
}

simidController.onShowSimid { [weak self] show in
  // Called by the SIMID controller when to show or hide the SIMID iframe
}

simidController.onResizeSimid { [weak self] dims in
  // Called by the SIMID controller when the SIMID iframe has to be resized
}
  
simidController.onResizePlayer { [weak self] dims in
  // Called by the SIMID controller when the main player element has to be resized
}

simidController.onGetMediaState { [weak self] in
  return MediaState(
    currentSrc: nil,
    currentTime: player?.currentTime().seconds ?? 0,
    duration: player?.currentItem?.duration.seconds ?? 0,
    ended: false,
    muted: player?.isMuted,
    paused: player?.timeControlStatus != .playing,
    volume: player?.volume,
    fullscreen: true
  )
}

simidController.onPlayMedia { [weak self] in
  // Called by the SIMID controller when the main video has to be played or resumed. 
}

simidController.onPauseMedia { [weak self] in
  // Called by the SIMID controller when the main video has to be paused.
}

simidController.onOpenClickthrough { url in
  // Called by the SIMID controller when the creative requests navigation to an external URI
}

simidController.onComplete { skipped in
  // Called by the SIMID controller when the SIMID nonlinear ad is completed  with indication if ad has been skipped
}

// 3 - Loads the SIMID creative
// Once SIMID iframe is loaded (see onAddSimid callback) the SIMID creative and controller will initiate the session 
simidController.load()
```
