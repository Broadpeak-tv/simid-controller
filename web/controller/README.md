# SIMID controller

Library/module that provides a base SIMID controller (a.k.a. as SIMID player) as specified by IAB: https://interactiveadvertisingbureau.github.io/SIMID/simid-1.1.0.html


The SIMID controller component can be integrated into any web application in order to load a SIMID creative and to support SIMID protocol to enable communication with the SIMID creative.

In the main application, when the application wants to load and display a SIMID creative, it has to create a ``simid.SimidPlayer`` class instance that will load and display the SIMID creative into an iframe. 


```js
const simidPlayer = new SimidPlayer(mainVideoElement, creativeUri, false, () => unloadSimid(), adParameters, duration)
simidPlayer.load()

function unloadSimid() {
  simidPlayer.reset()
}
```
