# SIMID Creative

The SIMID creative component can be integrated into a creative web page in order to support SIMID protocol and thus enable communication with the main video and ad players.

In the creative javascript code, you can create a SIMID creative component based on the ``simid.SimidCreative`` class that handles all the protocol communication with SIMID player.

```js
const creative = new simid.SimidCreative()
creative.createSession()
```

If you want to add specific behavior in the creative life cycle, you can customize the ``simid.SimidCreative`` component by creating a new derived class and extend the SIMID protocol messaging according to your needs.

```js
class MyCreative extends simid.SimidCreative {
  constructor() {
    super()
  }

  /** @override */
  onPlayerInit(message) {
    // Handles SIMID:Player:Init message
    // (see https://interactiveadvertisingbureau.github.io/SIMID/simid-1.1.0.html#simid-player-init)

    // At this stage you can for example request main player to resize
    // (see https://interactiveadvertisingbureau.github.io/SIMID/simid-1.1.0.html#simid-creative-requestResize)
    this.sendRequestResize(videoDimensions, creativeDimensions)
  }
}

const myCreative = new MyCreative()
myCreative.createSession()
```

See ``simid.SimidCreative`` class API documentation to handle events from player and Media Element.
