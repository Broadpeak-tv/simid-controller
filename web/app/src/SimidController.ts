import * as simid from '@broadpeak-tv/simid-controller'

export default class SimidController extends simid.SimidController {

  private _simidControllerApi: any /*GenericSimidControllerApi*/

  public set simidControllerApi(controllerApi: any) {
    this._simidControllerApi = controllerApi
  }

  protected receiveMessage(event: MessageEvent): void {
    super.receiveMessage(event)
    if (!event || !event.data) {
      return
    }
    this._simidControllerApi?.onMessageReceived(event.data)
  }

  protected postMessage(message: simid.Message): void {
    super.postMessage(message)
    this._simidControllerApi?.onMessageSent(JSON.stringify(message))
  }
}