
import { SimidPlayer, MediaState } from '@broadpeak/simid-controller'

declare const shaka: any
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

  private player: any // ShakaPlayer

  private simidController: SimidPlayer | undefined

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
  }

  public async init() {

    this.loadPlayer()

    this.streamButtonLoad.onclick = (e) => this.loadStream()
    this.streamButtonStop.onclick = (e) => this.stopStream()
    this.creativeButtonLoad.onclick = (e) => this.loadSimidController()

    this.streamEditUrl.value = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd'
    this.creativeEditUrl.value = 'https://explo.broadpeak.tv/simid/adserver/l-banner_vitamont.html'
    this.creativeEditDuration.value = '10'
  }

  private async loadPlayer() {
    shaka.polyfill.installAll()
    this.player = new shaka.Player()
    await this.player.attach(this.videoElement)
  }

  private async loadStream() {
    const url = this.streamEditUrl.value

    await this.player.load(url)
    this.videoElement.play()
    // .then(_ => console.log("OK"))
    .catch(error => {
      // console.error(error)
      this.videoElement.muted = true
      this.videoElement.play()
    })

  }

  private async stopStream() {
    await this.player.unload()
  }

  private loadSimidController() {
    const simidUrl = this.creativeEditUrl.value
    const duration = parseInt(this.creativeEditDuration.value)

    this.simidController = new SimidPlayer(this.appContainer, this.playerContainer, simidUrl, '', duration)
    this.simidController.onGetMediaState = () => this.getMediaState()
    this.simidController.load()
  }

  private getMediaState(): MediaState {
    return {
      currentTime: this.videoElement.currentTime
    }
  }
}