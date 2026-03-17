import Player from './Player'

const DEFAULT_STREAM_URL = 'https://dcv5s0ei7csoc.cloudfront.net/ab8df9f7733db561c626a58ea0149fbf/hls/Partner_-_Sky_Ad_Tech_-_Demo/401/152/Chicago_Fire_10001_Mayday_for_Marketing_XfinityComcast_101421_5_new.m3u8'

type Stream = {
  player: Player
  playerContainer: HTMLElement
  playerElement: HTMLElement
  videoElement: HTMLMediaElement
  streamEditUrl: HTMLInputElement
  streamButtonLoad: HTMLButtonElement
  streamButtonStop: HTMLButtonElement
}
export default class App {
  private resizeTimer: number = -1

  private streams: Stream[]

  constructor() {
    this.streams = [
      this.createStream('main-1', 'player-1', 'video-1', 'stream-edit-url-1', 'stream-button-load-1', 'stream-button-stop-1'),
      this.createStream('main-2', 'player-2', 'video-2', 'stream-edit-url-2', 'stream-button-load-2', 'stream-button-stop-2')
    ];

    this.setResizeObserver()
  }

  public async init() {
    for (const stream of this.streams) {
      stream.streamButtonLoad.onclick = () => this.loadStream(stream)
      stream.streamButtonStop.onclick = () => this.stopStream(stream)

      const urlParam = (new URL(window.location.href)).searchParams.get('url')
      const url = urlParam || DEFAULT_STREAM_URL

      stream.streamEditUrl.value = url
    }
  }

  public async reset() {
    await this.stopStreams()
  }

  private createStream(containerId: string, playerElementId: string, videoElementId: string, streamEditUrlId: string, streamButtonLoadId: string, streamButtonStopId: string) {
    const container = document.getElementById(containerId) as HTMLElement
    const playerElement = document.getElementById(playerElementId) as HTMLElement
    const videoElement = document.getElementById(videoElementId) as HTMLMediaElement

    return {
      playerContainer: container,
      playerElement: playerElement,
      videoElement: videoElement,
      streamEditUrl: document.getElementById(streamEditUrlId) as HTMLInputElement,
      streamButtonLoad: document.getElementById(streamButtonLoadId) as HTMLButtonElement,
      streamButtonStop: document.getElementById(streamButtonStopId) as HTMLButtonElement,
      player: new Player(container, playerElement, videoElement)
    }
  }

  private async stopStreams() {
    for(const stream of this.streams) {
      await this.stopStream(stream)
    }
  }

  private async resizeStreams() {
    for(const stream of this.streams) {
      stream.player.handleResize()
    }
  }

  private async loadStream(stream: Stream) {
    const url = stream.streamEditUrl.value
    await stream.player.load(url)
  }

  private async stopStream(stream: Stream) {
    return stream.player.stop()
  }

  private setResizeObserver() {
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = window.setTimeout(() => {
        console.log('Window resized:', window.innerWidth, window.innerHeight)
        this.resizeStreams()
      }, 200)
    })
  }
}
