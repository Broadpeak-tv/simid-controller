# SIMID controller

Library/module that provides a base SIMID controller (a.k.a. as SIMID player) as specified by IAB: https://interactiveadvertisingbureau.github.io/SIMID/simid-1.1.0.html

The SIMID controller component can be integrated into any web application in order to load a SIMID creative and to support SIMID protocol to enable communication with the SIMID creative.

In the main application, when the application wants to load and display a SIMID creative, it has to create a ``simid.SimidController`` class instance that will load the SIMID creative into an iframe, communicate with it through SIMID protocol and trigger the display of the SIMID iframe (visible state, dimensions). 

The following source code illustrates how to instantiate and manage the provided ``simid.SimidController``.

```js
// Create SIMID controller 
const simidController = new SimidController(playerRect, creativeUri, adParameters, duration)

// Provides callback functions
simidController.onGetMediaState = () => {
  // Returns media state such as duration, currentTime, paused etc
  return {
    currentTime: videoElement.currentTime
    // ...
  }
}

simidController.onAddSimid = () => {
  // Add SIMID iframe into current DOM
  // ...
}

simidController.onShowSimid((show: boolean) => void) {
  // Show or hide the SIMID iframe
  // ...
}

simidController.onResizeSimid((dimensions: DOMRect) => boolean) {
  // Resize the SIMID iframe
  // ...
}
  
simidController.onResizePlayer((dimensions: DOMRect) => void) {
  // Resize the main player video
  // ...
}

simidController.onComplete((skipped: boolean) => void) {
  // Handle the completion of the non linear ad, with indication if ad has been skipped
  // ...
}

// Load the SIMID creative
simidController.load()
```

### Build the library

``# npm ci``
``# npm run build``
