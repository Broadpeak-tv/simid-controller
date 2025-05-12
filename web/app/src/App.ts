import Player from './Player'

const STORAGE_BASE_KEY = 'simid-demo-app:'

export default class App {

  private playerContainer: HTMLElement
  private playerElement: HTMLElement
  private videoElement: HTMLMediaElement

  private streamEditUrl: HTMLTextAreaElement
  private streamButtonLoad: HTMLButtonElement
  private streamButtonStop: HTMLButtonElement

  private player: Player

  constructor() {
    this.playerContainer = document.getElementById('main') as HTMLElement
    this.playerElement = document.getElementById('player') as HTMLElement
    this.videoElement = document.getElementById('video') as HTMLMediaElement
    this.streamEditUrl = document.getElementById('stream-edit-url') as HTMLTextAreaElement
    this.streamButtonLoad = document.getElementById('stream-button-load') as HTMLButtonElement
    this.streamButtonStop = document.getElementById('stream-button-stop') as HTMLButtonElement

    this.player = new Player(this.playerContainer, this.playerElement, this.videoElement)
  }

  public async init() {

    this.streamButtonLoad.onclick = (e) => this.loadStream()
    this.streamButtonStop.onclick = (e) => this.stopStream()
    
    this.streamEditUrl.value = this.getFromLocalStorage('stream', 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd')
  }

  private async loadStream() {
    const url = this.streamEditUrl.value
    await this.player.load(url)
    this.saveToLocalStorage('stream', this.streamEditUrl.value)
  }

  private async stopStream() {
    await this.player.stop()
  }

  private getFromLocalStorage(field: string, defaultValue = '') : string {
    try {
      return localStorage.getItem(STORAGE_BASE_KEY + field) || defaultValue
    } catch (e) {
      console.error(e)
      return ''
    }
  }

  private saveToLocalStorage(field: string, value: string) {
    try {
      localStorage.setItem(STORAGE_BASE_KEY + field, value)
    } catch (e) {
      console.error(e)
    }
  }
}