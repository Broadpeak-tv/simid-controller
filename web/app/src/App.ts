
import { SimidController, MediaState } from '@broadpeak/simid-controller'
import Player from './Player'

export default class App {

  private appContainer: HTMLElement
  private playerContainer: HTMLElement
  private videoElement: HTMLMediaElement

  private streamEditUrl: HTMLTextAreaElement
  private streamButtonLoad: HTMLButtonElement
  private streamButtonStop: HTMLButtonElement
  private creativeButtonLoad: HTMLButtonElement
  private creativeEditUrl: HTMLTextAreaElement
  private creativeEditDuration: HTMLTextAreaElement

  private player: Player

  private simidController: SimidController | undefined

  constructor() {
    this.appContainer = document.getElementById('main') as HTMLElement
    this.playerContainer = document.getElementById('player') as HTMLElement
    this.videoElement = document.getElementById('video') as HTMLMediaElement
    this.streamEditUrl = document.getElementById('stream-edit-url') as HTMLTextAreaElement
    this.streamButtonLoad = document.getElementById('stream-button-load') as HTMLButtonElement
    this.streamButtonStop = document.getElementById('stream-button-stop') as HTMLButtonElement
    this.creativeButtonLoad = document.getElementById('creative-button-load') as HTMLButtonElement
    this.creativeEditUrl = document.getElementById('creative-edit-url') as HTMLTextAreaElement
    this.creativeEditDuration = document.getElementById('creative-edit-duration') as HTMLTextAreaElement

    this.player = new Player(this.appContainer, this.playerContainer, this.videoElement)
  }

  public async init() {

    this.streamButtonLoad.onclick = (e) => this.loadStream()
    this.streamButtonStop.onclick = (e) => this.stopStream()
    this.creativeButtonLoad.onclick = (e) => this.loadSimid()

    this.streamEditUrl.value = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd'
    this.creativeEditUrl.value = ''
    this.creativeEditDuration.value = '10'
  }

  private async loadStream() {
    const url = this.streamEditUrl.value
    await this.player.load(url)
  }

  private async stopStream() {
    await this.player.stop()
  }

  private loadSimid() {
    const creativeUri = this.creativeEditUrl.value
    const duration = parseInt(this.creativeEditDuration.value)

    this.player.loadSimid(creativeUri, duration)
  }
}