import Player from './Player'

const DEFAULT_STREAM_URL = 'https://dcv5s0ei7csoc.cloudfront.net/ab8df9f7733db561c626a58ea0149fbf/hls/Partner_-_Sky_Ad_Tech_-_Demo/401/152/Chicago_Fire_10001_Mayday_for_Marketing_XfinityComcast_101421_5_new.m3u8'

type Stream = {
  id: string
  player: Player
  playerContainer: HTMLElement
  playerElement: HTMLElement
  videoElement: HTMLMediaElement
  audienceSelect: HTMLSelectElement
}

const contentUrls = {
  'ice-hockey': 'https://dcv5s0ei7csoc.cloudfront.net/ab8df9f7733db561c626a58ea0149fbf/dash/Partner_-_Sky_Ad_Tech_-_Demo/555/957/041725_PHI-BUF_GMHIGHVIDEO_8.mpd?contentid=Flyers1-041725_PHI-BUF_GMHIGHVIDEO',
  'chicago-fire': 'https://dcv5s0ei7csoc.cloudfront.net/ab8df9f7733db561c626a58ea0149fbf/dash/Partner_-_Sky_Ad_Tech_-_Demo/401/152/259191365548-1773402486850-master.mpd?contentid=urn:theplatform:guid:GMO_00000000334594_01'
}

export default class App {
  private resizeTimer: number = -1

  private streams: Stream[]

  private contentSelect: HTMLSelectElement
  private loadStreamButton: HTMLButtonElement
  private stopStreamButton: HTMLButtonElement
  private seekSelect: HTMLSelectElement
  private seekButton: HTMLButtonElement
  private playButton: HTMLButtonElement
  private pauseButton: HTMLButtonElement

  constructor() {
    this.contentSelect = document.getElementById('stream-content') as HTMLSelectElement
    this.loadStreamButton = document.getElementById('stream-button-load') as HTMLButtonElement
    this.stopStreamButton = document.getElementById('stream-button-stop') as HTMLButtonElement
    this.seekButton = document.getElementById('seek-button') as HTMLButtonElement
    this.seekSelect = document.getElementById('ad-seek-select') as HTMLSelectElement
    this.playButton = document.getElementById('play-button') as HTMLButtonElement
    this.pauseButton = document.getElementById('pause-button') as HTMLButtonElement

    this.streams = [
      this.createStream('player-1', 'main-1', 'player-1', 'video-1', 'audience-select-1'),
      this.createStream('player-2', 'main-2', 'player-2', 'video-2', 'audience-select-2'),
    ];

    this.setResizeObserver()
  }

  public async init() {
    this.loadStreamButton.onclick = () => this.loadStreams()
    this.stopStreamButton.onclick = () => this.stopStreams()
    this.seekButton.onclick = () => this.seekStreams()
    this.playButton.onclick = () => this.playStreams()
    this.pauseButton.onclick = () => this.pauseStreams()
  }

  public async reset() {
    await this.stopStreams()
  }

  private createStream(id: string, containerId: string, playerElementId: string, videoElementId: string, audienceSelectId: string) {
    const container = document.getElementById(containerId) as HTMLElement
    const playerElement = document.getElementById(playerElementId) as HTMLElement
    const videoElement = document.getElementById(videoElementId) as HTMLMediaElement

    return {
      id,
      playerContainer: container,
      playerElement: playerElement,
      videoElement: videoElement,
      audienceSelect: document.getElementById(audienceSelectId) as HTMLSelectElement,
      player: new Player(container, playerElement, videoElement)
    }
  }

  private async loadStreams() {
    const [adBreaks] = await Promise.all(this.streams.map(stream => this.loadStream(stream)))

    for (const adBreak of adBreaks) {
      const time = adBreak - 5000 // Seek to 5 seconds before the ad break
      const element = new Option(this.getAdBreakText(time), String(this.getAdBreakInSeconds(time)))
      this.seekSelect.appendChild(element)
    }
  }

  private getAdBreakText(milliseconds: number) {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${minutes}:${String(seconds).padStart(2, '0')}`
  }

  private getAdBreakInSeconds(adBreakTimeMs: number) {
    return adBreakTimeMs / 1000
  }

  private async stopStreams() {
    for (const stream of this.streams) {
      await this.stopStream(stream)
    }
  }

  private async resizeStreams() {
    for (const stream of this.streams) {
      stream.player.handleResize()
    }
  }

  private async seekStreams() {
    for (const stream of this.streams) {
      stream.player.seek(Number(this.seekSelect.value))
    }
  }

  private async loadStream(stream: Stream): Promise<number[]> {
    const contentUrl = contentUrls[this.contentSelect.value as keyof typeof contentUrls]
    const url = `${contentUrl}&audienceid=${stream.audienceSelect.value}`
    console.log(`[Load Stream] ${url} for ${stream.id}`)
    return await stream.player.load(url)
  }

  private async pauseStreams() {
    for (const stream of this.streams) {
      stream.videoElement.pause()
    }
  }

  private async playStreams() {
    for (const stream of this.streams) {
      stream.videoElement.play()
    }
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
