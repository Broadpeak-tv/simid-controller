

var App = function () {

  // this.manifest = 'https://explo.broadpeak.tv:8343/bpk-tv/cycling/default/index.mpd'
  // this.manifest = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
  // this.manifest = 'https://stream.broadpeak.io/1160453108d3e53795c0486f733eb9f2/bpk-vod/voddemo/default/10min/sintel/manifest.mpd'
  // this.manifest = 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a957f91e9872f1746/bpk-tv/bpkiofficial/default/index.mpd?category=woman'
  // this.manifest = 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a71193233516a9969/bpk-vod/voddemo/default/unity/adam/index.mpd?category=teenagers'
  // this.bkyouUrl = '../adserver/bkyou-preroll-simid.json'

  this.stream = DEMO_STREAMS.live_preroll_family

  this.video = null
  this.creativeSelect = null
  this.player = null
  this.session = null
  this.simidPlayer = null

  App.prototype.init = async function () {

    this.video = document.querySelector("video")
    this.initUI()

    this.queryParams = this.getQueryParams()
    if (this.queryParams.stream) {
      this.stream = DEMO_STREAMS[this.queryParams.stream]
    }

    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll()

    this.loadPlayer()
  }

  App.prototype.getQueryParams = function() {
    const params = {}
    const regex = /[\\?&]([^&=]+)=([^&=]+)/gi
    const url = window.location.href
    let res = null
    while ((res = regex.exec(url)) !== null) {
      params[res[1]] = res[2]
    }
    return params
  }

  App.prototype.initUI = function() {
    this.creativeSelect = document.getElementById('creative-select')
    CREATIVES.forEach((creative, index) => {
      const option = document.createElement('option')
      option.value = index.toString()
      option.text = creative.name
      this.creativeSelect.add(option)      
    })

    document.getElementById('creative-start').onclick = (e) => this.startAd()

    document.addEventListener('keydown', (e) => this.onKeyDown(e))
  }

  App.prototype.loadPlayer = async function () {
    if (this.player) {
      await this.stopPlayer()
    }

    // Check to see if the browser supports the basic APIs Shaka needs.
    // if (!shaka.Player.isBrowserSupported()) {
    //   console.error('ShakaPlayer not supported on current browser!')
    //   return
    // }

    try {
      // Get stream domain name
      const domain = (new URL(this.stream.manifest)).hostname

      // Init SmartLib session
      SmartLib.getInstance().init('', '', domain)
      this.session = SmartLib.getInstance().createStreamingSession()
      this.initAd()

      await this.playerCreate()
      window.player = this.player

      // Attach player to smartlib session
      this.session.attachPlayer(this.player)

      const result = await this.session.getURL(this.stream.manifest)

      // Load manifest
      await this.playerLoad(result.url || this.stream.manifest)
    } catch (e) {
      console.error(e)
    }
  }

  App.prototype.stopPlayer = async function () {
    if (this.simidPlayer) {
      this.simidPlayer.reset()
    }
    this.session.stopStreamingSession()
    await this.playerStop()
    this.player = null
  }

  App.prototype.initAd = function() {
    this.session.activateAdvertising()
    // this.session.setAdParameter('url', this.bkyouUrl)
    this.session.setAdEventsListener({
      onAdBegin: (adData, adBreakData) => this.onAdStart(adData, adBreakData),
      onAdEnd: (adData, adBreakData) => this.onAdEnd(adData, adBreakData),
      onAdBreakBegin: () => {},
      onAdBreakEnd: () => {},
      onAdSkippable: () => {},
    })
  }

  App.prototype.onMessage = async function (message) {
    console.log('')
  }

  App.prototype.onAdStart = function(adData, adBreakData) {
    console.log('### onAdStart', adData, adBreakData, Math.round(this.video.currentTime * 1000))
    const nonLinearAd = adData.nonLinearAd || (this.stream.ads[adData.creativeId] ? this.stream.ads[adData.creativeId].ad : null)
    if (!nonLinearAd || nonLinearAd.apiFramework.toLowerCase() !== 'simid') {
      return
    }
    const creativeUri = nonLinearAd.iframeResource
    let adParams = nonLinearAd.adParams
    if (this.stream.ads[adData.creativeId] && this.stream.ads[adData.creativeId].adParams) {
      adParams = {
        ...adParams,
        ...this.stream.ads[adData.creativeId].adParams
      }
    }
    const duration = (adData.duration / 1000) - 2
    this.simidPlayer = new simid.SimidPlayer(this.video, creativeUri, false, () => this.onAdCompleted(), JSON.stringify(adParams), duration)
    this.simidPlayer.load()
  }

  App.prototype.onAdEnd = function(adData, adBreakData) {
  }

  App.prototype.startAd = function() {
    this.creativeSelect.selectedIndex
    const creative = CREATIVES[this.creativeSelect.selectedIndex]
    const duration = parseInt(document.getElementById('creative-duration').value)
    this.simidPlayer = new simid.SimidPlayer(this.video, creative.uri, false, () => this.onAdCompleted(), JSON.stringify(creative.adParams), duration)
    this.simidPlayer.load()
  }

  App.prototype.onAdCompleted = function() {
    console.log('[APP] Ad completed')
    this.simidPlayer.reset()
    this.simidPlayer = null
  }

  App.prototype.onKeyDown = function(event) {
    console.log('*** KEY_DOWN', event)
    switch (event.keyCode) {
      case 19 /*Pause*/:
        this.pause()
        break
      case 415/*Play*/:
        this.play()
        break
      case 413/*Stop*/:
        this.stop()
        break
      default:
        break
    }
  }

  App.prototype.play = function () {
    if (!this.player) {
      this.loadPlayer()
    } else {
      this.video.play()
    }
  }

  App.prototype.pause = function () {
    if (!this.player) {
      return
    }
    this.video.pause()
  }

  App.prototype.stop = function () {
    if (!this.player) {
      return
    }
    this.stopPlayer()
  }
  
  App.prototype.playerCreate = async function () {
    // shaka
    this.player = new shaka.Player()
    await this.player.attach(this.video)
    this.player.addEventListener('error', (event) => console.error('Player error', event.detail))

    // dahsjs
    // this.player = dashjs.MediaPlayer().create()
    // this.player.initialize(this.video, undefined, true)
  }

  App.prototype.playerLoad = async function (url) {
    // shaka
    await this.player.load(url)

    // dahsjs
    // this.player.attachSource(url)
  }

  App.prototype.playerStop = async function () {
    // shaka
    await this.player.detach()
    await this.player.destroy()

    // dahsjs
    // this.player.attachSource(null)
    // this.player.destroy()
  }
}
