import { MediaState } from '@broadpeak-tv/simid-controller'
import SimidController from './SimidController'

declare const shaka: any
declare const SmartLib: any
declare const GenericSimidControllerApi: any

export default class Player {

  private playerContainer: HTMLElement
  private playerElement: HTMLElement
  private videoElement: HTMLMediaElement
  private simidIframe: HTMLIFrameElement | undefined

  private player: any // ShakaPlayer

  private smartlibSession: any // SmartLib.Session
  private simidAdData: any = undefined
  private simidController: SimidController | undefined
  private bpkSimidController: any /*GenericSimidControllerApi*/

  constructor(playerContainer: HTMLElement, playerElement: HTMLElement, videoElement: HTMLMediaElement) {
    this.playerContainer = playerContainer
    this.playerElement = playerElement
    this.videoElement = videoElement

    this.simidIframe = undefined

    this.bpkSimidController = new GenericSimidControllerApi()

    this.loadPlayer()
  }

  public async load(url: string) {

    // Get stream domain name
    const domain = (new URL(url)).hostname

    // Initialize SmartLib session
    SmartLib.getInstance().init('', '', domain)
    this.smartlibSession = SmartLib.getInstance().createStreamingSession()
    this.setAdEventsListeners(this.smartlibSession)

    // Attach player to smartlib session
    this.smartlibSession.attachPlayer(this.player)

    // Attach bpkSimidController to the session
    this.smartlibSession.attachSimidController(this.bpkSimidController)

    const result = await this.smartlibSession.getURL(url)

    await this.player.load(result.url || url)
    this.videoElement.play()
    // .then(_ => console.log("OK"))
    .catch(error => {
      // console.error(error)
      this.videoElement.muted = true
      this.videoElement.play()
    })
  }
  
  public async stop() {
    this.smartlibSession.stopStreamingSession()
    await this.player.unload()
  }

  public loadSimid(creativeUri: string, adParameters: string, duration: number) {

    // Consider player container dimensions as initial creative dimensions
    const playerRect: DOMRect = this.playerContainer.getBoundingClientRect()

    this.simidController = new SimidController(playerRect, creativeUri, adParameters, duration)

    this.simidController.onGetMediaState = () => this.getMediaState()
    this.simidController.onAddSimid = (iframe: HTMLIFrameElement) => this.addSimidIframe(iframe)
    this.simidController.onShowSimid = (show: boolean) => this.showSimidIframe(show)
    this.simidController.onResizeSimid = (dimensions: DOMRect) => this.resizeSimid(dimensions)
    this.simidController.onResizePlayer = (dimensions: DOMRect) => this.resizePlayer(dimensions)
    this.simidController.onComplete = (skipped: boolean) => this.completeAd(skipped)

    this.simidController.simidControllerApi = this.bpkSimidController

    this.simidController.load()
  }

  private async loadPlayer() {
    shaka.polyfill.installAll()
    this.player = new shaka.Player()
    await this.player.attach(this.videoElement)
  }

  private setAdEventsListeners(session: any/*: SmartLib.Session*/) {
    // this.session.attachSimidController(new BpkSimidControllerApi(window))
    session.activateAdvertising()
    session.setAdEventsListener({
        onPrepareAdBreak: (adBreakData: any) => {
            console.log('[Player] onPrepareAdBreak:', adBreakData)
        },
        onAdBreakBegin: (adBreakData: any) => {
          console.log('[Player] onAdBreakBegin:', adBreakData)
        },
        onPrepareAd: (adData: any, adBreakData: any) => {
          console.log('[Player] onPrepareAd:', adData)
        },
        onAdBegin: (adData: any, adBreakData: any) => {
          console.log('[Player] onAdBegin:', adData)
          if (adData.nonLinearIframeResources && adData.nonLinearIframeResources.length) {
            this.simidAdData = adData
            const iframeResources = adData.nonLinearIframeResources[0]
            const duration = adData.duration ? (adData.duration / 1000) : 0
            this.loadSimid(iframeResources.url, iframeResources.parameters, duration)
          }
        },
        onAdSkippable: (adData: any, adBreakData: any, adSkippablePosition: any, adEndPosition: any, adBreakEndPosition: any) => {
          console.log('[Player] onAdSkippable:', adData)
        },
        onAdEnd: (adData: any, adBreakData: any) => {
          console.log('[Player] onAdEnd:', adData)
          if (this.simidAdData && this.simidController) {
            this.simidController.reset()
            this.simidController = undefined
            this.simidAdData = undefined
          }
        },
        onAdBreakEnd: (adBreakData: any) => {
          console.log('[Player] onAdBreakEnd:', adBreakData)
        }
    })
  }

  private getMediaState(): MediaState {
    return {
      currentTime: this.videoElement.currentTime
    }
  }

  private addSimidIframe(iframe: HTMLIFrameElement): boolean {
    this.playerContainer.appendChild(iframe)
    this.simidIframe = iframe
    return true
  }

  private showSimidIframe(show: boolean) {
    if (!this.simidIframe) {
      return
    }
    this.simidIframe.style.display = show ? 'block' : 'none'
  }

  private resizeSimid(dimensions: DOMRect): boolean {
    if (!this.simidIframe) {
      return false
    }
    console.log('[Player] Resize SIMID:', dimensions)

    // Check if requested SIMID dimensions is not outside original player container dimensions
    const playerRect: DOMRect = this.playerContainer.getBoundingClientRect()
    const widthFits = dimensions.x + dimensions.width <= playerRect.width
    const heightFits = dimensions.y + dimensions.height <= playerRect.height
    if (!widthFits || !heightFits) {
      return false;
    }

    this.setElementDimensions(this.simidIframe, dimensions)
    return true
  }

  private resizePlayer(dimensions: DOMRect) {
    console.log('[Player] Resize player:', dimensions)
    this.setElementDimensions(this.playerElement, dimensions)
  }

  private completeAd(skipped: boolean) {
    console.log('[Player] Complete ad, skipped:', skipped)
    if (skipped && this.simidAdData) {
      this.skipCurrentAd(this.simidAdData)
    }
    this.simidController = undefined
  }

  private setElementDimensions(element: HTMLElement, dimensions: DOMRect) {
    console.log(`[Player] Resize ${element.id} x:${dimensions.x} y:${dimensions.y} w:${dimensions.width} h:${dimensions.height}`)
    element.style.height = `${dimensions.height}`
    element.style.width = `${dimensions.width}`
    element.style.left = `${dimensions.x}`
    element.style.top = `${dimensions.y}`
  }

  private skipCurrentAd(adData: any) {
    if (!adData) {
      return
    }
    this.player.currentTime = (adData.startPosition + adData.duration) / 1000
  } 
}