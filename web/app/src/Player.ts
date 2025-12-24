import { MediaState } from '@broadpeak-tv/simid-controller'
import SimidController from './SimidController'
import { SmartLib } from '@broadpeak/smartlib'
import '@broadpeak/smartlib-ad'
import '@broadpeak/smartlib-shaka'
import '@broadpeak/smartlib-analytics'
import { GenericSimidControllerApi } from '@broadpeak/smartlib-simid'

declare const shaka: any

export default class Player {

  private playerContainer: HTMLElement
  private playerElement: HTMLElement
  private videoElement: HTMLMediaElement

  private player: any // ShakaPlayer

  private smartlibSession?: any /* StreamingSession */
  private adDatas: Map<string, any> = new Map<string, any>()
  private simidControllers: Map<string, SimidController> = new Map<string, SimidController>()
  private simidIframes: Map<string, HTMLIFrameElement> = new Map<string, HTMLIFrameElement>()
  private bpkSimidController: any /* GenericSimidControllerApi */

  constructor(playerContainer: HTMLElement, playerElement: HTMLElement, videoElement: HTMLMediaElement) {
    this.playerContainer = playerContainer
    this.playerElement = playerElement
    this.videoElement = videoElement

    this.loadPlayer()
  }

  public async load(url: string) {

    // Get stream domain name
    const domain = (new URL(url)).hostname

    // Initialize SmartLib session
    SmartLib.getInstance().init('', '', domain)
    this.smartlibSession = SmartLib.getInstance().createStreamingSession()
    this.setAdEventsListeners(this.smartlibSession)

    this.bpkSimidController = new GenericSimidControllerApi()

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
    this.simidControllers.forEach(controller => controller.reset())
    this.smartlibSession?.stopStreamingSession()
    await this.player.unload()
  }

  public loadSimid(adId: string, creativeUri: string, adParameters: string, duration: number) {

    // Consider player container dimensions as initial creative dimensions
    const playerRect: DOMRect = this.playerContainer.getBoundingClientRect()

    console.log(`[Player] Load SIMID - uri:${creativeUri} duration:${duration}`)
    const simidController = new SimidController(playerRect, playerRect, creativeUri, adParameters, duration)

    simidController.onGetMediaState = () => this.getMediaState()
    simidController.onAddSimid = (iframe: HTMLIFrameElement) => this.addSimidIframe(adId, iframe)
    simidController.onShowSimid = (show: boolean) => this.showSimidIframe(adId, show)
    simidController.onResizeSimid = (dimensions: DOMRect) => this.resizeSimid(adId, dimensions)
    simidController.onResizePlayer = (dimensions: DOMRect) => this.resizePlayer(dimensions)
    simidController.onPauseMedia = () => this.pauseMedia()
    simidController.onPlayMedia = () => this.playMedia()
    simidController.onComplete = (skipped: boolean) => this.completeAd(adId, skipped)

    simidController.simidControllerApi = this.bpkSimidController

    console.log(`[Player] Load SIMID controller v${simidController.getVersion()}`)
    simidController.load(false)

    this.simidControllers.set(adId, simidController)
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
          this.adDatas.set(adData.adId, adData)
          if (adData.nonLinearIframeResources && adData.nonLinearIframeResources.length) {
            const iframeResources = adData.nonLinearIframeResources[0]
            const duration = adData.duration ? (adData.duration / 1000) : 0
            this.loadSimid(adData.adId, iframeResources.url, iframeResources.parameters, duration)
          }
        },
        onAdBegin: (adData: any, adBreakData: any) => {
          console.log('[Player] onAdBegin:', adData)
          const simidController = this.simidControllers.get(adData.adId)
          if (simidController) {
            simidController.start()
          }
        },
        onAdSkippable: (adData: any, adBreakData: any, adSkippablePosition: any, adEndPosition: any, adBreakEndPosition: any) => {
          console.log('[Player] onAdSkippable:', adData)
        },
        onAdEnd: (adData: any, adBreakData: any) => {
          console.log('[Player] onAdEnd:', adData)
          const simidController = this.simidControllers.get(adData.adId)
          if (simidController) {
            simidController.reset()
            this.simidControllers.delete(adData.adId)            
          }
          this.adDatas.delete(adData.adId)            
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

  private addSimidIframe(adId: string, iframe: HTMLIFrameElement): boolean {
    this.playerContainer.appendChild(iframe)
    this.simidIframes.set(adId, iframe)
    return true
  }

  private showSimidIframe(adId: string, show: boolean) {
    const simidIframe = this.simidIframes.get(adId)
    if (!simidIframe) {
      return
    }
    simidIframe.style.display = show ? 'block' : 'none'
  }

  private resizeSimid(adId: string, dimensions: DOMRect): boolean {
    const simidIframe = this.simidIframes.get(adId)
    if (!simidIframe) {
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

    this.setElementDimensions(simidIframe, dimensions)
    return true
  }

  private resizePlayer(dimensions: DOMRect) {
    console.log('[Player] Resize player:', dimensions)
    this.setElementDimensions(this.playerElement, dimensions)
  }

  private pauseMedia(): boolean {
    console.log('[Player] Pause media')
    this.videoElement.pause()
    return true
  }

  private playMedia(): boolean {
    console.log('[Player] Play media')
    this.videoElement.play()
    return true
  }

  private completeAd(adId: string, skipped: boolean) {
    console.log('[Player] Complete ad, skipped:', skipped)
    const adData = this.adDatas.get(adId)
    if (skipped && adData) {
      this.skipCurrentAd(adData)
    }
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
    this.videoElement.currentTime = (adData.startPosition + adData.duration) / 1000
  } 
}