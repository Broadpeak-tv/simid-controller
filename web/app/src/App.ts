import Player from './Player'

const DEFAULT_STREAM_URL = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd'
const DEFAULT_CREATIVE_URL = 'https://interactiveadvertisingbureau.github.io/SIMID/examples/creatives/banner_nonlinear.html'
const DEFAULT_CREATIVE_AD_PARAMS = '{"bannerText":"Click here to draw!","webUrl":"https://quickdraw.withgoogle.com/"}'
const DEFAULT_CREATIVE_DURATION = 10

export default class App {

  private playerContainer: HTMLElement
  private playerElement: HTMLElement
  private videoElement: HTMLMediaElement

  private streamEditUrl: HTMLTextAreaElement
  private streamButtonLoad: HTMLButtonElement
  private streamButtonStop: HTMLButtonElement

  private creativeEditUrl: HTMLTextAreaElement
  private creativeEditAdParams: HTMLTextAreaElement
  private creativeEditDuration: HTMLTextAreaElement
  private creativeButtonStart: HTMLButtonElement

  private resizeTimer: number = -1

  private player: Player

  constructor() {
    this.playerContainer = document.getElementById('player-container') as HTMLElement
    this.playerElement = document.getElementById('player') as HTMLElement
    this.videoElement = document.getElementById('video') as HTMLMediaElement
    this.streamEditUrl = document.getElementById('stream-edit-url') as HTMLTextAreaElement
    this.streamButtonLoad = document.getElementById('stream-button-load') as HTMLButtonElement
    this.streamButtonStop = document.getElementById('stream-button-stop') as HTMLButtonElement

    this.creativeEditUrl = document.getElementById('creative-edit-url') as HTMLTextAreaElement
    this.creativeEditAdParams = document.getElementById('creative-edit-adparams') as HTMLTextAreaElement
    this.creativeEditDuration = document.getElementById('creative-edit-duration') as HTMLTextAreaElement
    this.creativeButtonStart = document.getElementById('creative-button-start') as HTMLButtonElement

    this.player = new Player(this.playerContainer, this.playerElement, this.videoElement)

    this.setResizeObserver()
  }

  public async init() {

    this.streamButtonLoad.onclick = (e) => this.loadStream()
    this.streamButtonStop.onclick = (e) => this.stopStream()

    this.creativeButtonStart.onclick = (e) => this.startCreative()

    const urlParam = (new URL(window.location.href)).searchParams.get('url')
    const url = urlParam || DEFAULT_STREAM_URL

    this.streamEditUrl.value = url
    this.creativeEditUrl.value = DEFAULT_CREATIVE_URL
    this.creativeEditAdParams.value = DEFAULT_CREATIVE_AD_PARAMS
    this.creativeEditDuration.value = DEFAULT_CREATIVE_DURATION.toString()

    setTimeout(() => this.loadStream(), 2000)
  }

  public async reset() {
    await this.stopStream()
  }

  private async loadStream() {
    const url = this.streamEditUrl.value
    await this.player.load(url)
  }

  private async stopStream() {
    await this.player.stop()
  }

  private async startCreative() {
    const url = this.creativeEditUrl.value
    const adParams = this.creativeEditAdParams.value
    const duration = parseInt(this.creativeEditDuration.value)
    this.player.loadSimid('input-creative', url, adParams, duration, true)
  }

  private setResizeObserver() {
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = window.setTimeout(() => {
        console.log('Window resized:', window.innerWidth, window.innerHeight)
        this.player?.handleResize()
      }, 200)
    })
  }
}