import * as simid from '@broadpeak-tv/simid-controller'

export default class SimidController extends simid.SimidController {

  private _simidControllerApi: any /*GenericSimidControllerApi*/

  public set simidControllerApi(controllerApi: any) {
    this._simidControllerApi = controllerApi
  }

  protected receiveMessage(event: MessageEvent): void {
    this._simidControllerApi?.onMessageReceived(event.data)
    super.receiveMessage(event)
  }

  protected postMessage(message: simid.Message): void {
    this._simidControllerApi?.onMessageSent(JSON.stringify(message))
    super.postMessage(message)
  }
}