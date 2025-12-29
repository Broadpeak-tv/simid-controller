import Player from './Player'

const DEFAULT_STREAM_URL = 'https://d2lwku66j7s1id.cloudfront.net/9bf31c7ff062936a7f941ad65712fad3/out/v1/6e0f649095ca4131b16bd0f877048629/index.mpd?nl-config=demo-samples-live'

export default class App {

  private playerContainer: HTMLElement
  private playerElement: HTMLElement
  private videoElement: HTMLMediaElement

  private streamEditUrl: HTMLTextAreaElement
  private streamButtonLoad: HTMLButtonElement
  private streamButtonStop: HTMLButtonElement

  private resizeTimer: number = -1

  private player: Player

  constructor() {
    this.playerContainer = document.getElementById('main') as HTMLElement
    this.playerElement = document.getElementById('player') as HTMLElement
    this.videoElement = document.getElementById('video') as HTMLMediaElement
    this.streamEditUrl = document.getElementById('stream-edit-url') as HTMLTextAreaElement
    this.streamButtonLoad = document.getElementById('stream-button-load') as HTMLButtonElement
    this.streamButtonStop = document.getElementById('stream-button-stop') as HTMLButtonElement

    this.player = new Player(this.playerContainer, this.playerElement, this.videoElement)

    this.setResizeObserver()
  }

  public async init() {

    this.streamButtonLoad.onclick = (e) => this.loadStream()
    this.streamButtonStop.onclick = (e) => this.stopStream()

    const urlParam = (new URL(window.location.href)).searchParams.get('url')
    const url = urlParam || DEFAULT_STREAM_URL

    this.streamEditUrl.value = url
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