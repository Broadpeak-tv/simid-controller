import {
  Message,
  MessageCallback,
  MessagesWithResponse,
  ProtocolMessage,
  RejectMessageArgsValue,
  ResolveMessageArgs
} from './SimidMessages'


const SIMID_NS = 'SIMID:' 
const SIMID_VERSION = '1.1'

const LOG_COLORS = {
  'Creative': '#33CCCC',
  'Player': '#4998DC',
}

/**
 * Contains logic for sending mesages between the SIMID creative and the player.
 * Note: Some browsers do not support promises and a more complete implementation
 * should consider using a polyfill.
 */
export class SimidComponent {

  // #region MEMBERS
  // The SIMID protocol supported version
  protected _protocolVersion: string

  // The protocol actor type ('Player' or 'Creative')
  protected _type: string

  // A map of messsage type to an array of callbacks.
  protected _listeners: Map<String, MessageCallback[]> 

  // The session ID for this protocol.
  protected _sessionId: string

  // The next message ID to use when sending a message.
  protected _nextMessageId: number

  // The window where the message should be posted to.
  protected _target: Window

  // postMessage handler
  private _messageHandler: (event: MessageEvent) => void

  // Response listeners for sent messages
  protected _responseListeners: Map<number, MessageCallback> 
  // #endregion MEMBERS

  // #region CONSTRUCTOR
  /**
   * Constructor
   * @param type The protocol actor type ('Player' or 'Creative')
   */
  constructor(type: string) {
    this._protocolVersion = SIMID_VERSION
    this._type = type
    this._listeners = new Map<String, MessageCallback[]>()
    this._sessionId = ''
    this._nextMessageId = 0
    this._responseListeners = new Map<number, MessageCallback>()

    // By default target window is top window, that will be used by the creative
    // The SIMID controller should use the creative iframe window as target window (see SimidController)
    this._target = window.top

    // Initialize postMessage event listener
    this._messageHandler = (event: MessageEvent) => {
      setTimeout(() => this.receiveMessage(event), 0)
    }
    window.addEventListener('message', this._messageHandler, false)
  }
  // #endregion CONSTRUCTOR

  // #region PROTECTED METHODS
  protected setMessageTarget(target: Window) {
    this._target = target
  }

  /**
   * Add a listener for a given message.
   * @param messageType the message type
   * @param callback the listener callback
   */
  protected addMessageListener(messageType: string, callback: MessageCallback) {
    if (!this._listeners.has(messageType)) {
      this._listeners.set(messageType, [])
    }
    this._listeners.get(messageType)?.push(callback)
  }

  /**
   * Sends a message using post message.
   * Returns a promise that will resolve or reject after the message receives a response.
   * @param messageType The name of the message.
   * @param messageArgs The arguments for the message, may be null.
   * @return A promise that will be fulfilled when client resolves or rejects.
   */
  protected sendMessage(messageType: string, messageArgs?: any): Promise<void> {
    // console.log(`[SIMID][${this._type}][S]`, messageType, messageArgs || {})

    const message: Message = this._createMessage(messageType, messageArgs)
    return this._sendMessage(message)
	}

  protected receiveMessage(event: MessageEvent) {
    if (!event || !event.data) {
      return
    }
    let message: Message | null
    try {
      message = JSON.parse(event.data)
      this.log(`[SIMID][${this._type}][R] ${JSON.stringify(message)}`)
    } catch (e) {
      this.log(`[SIMID][${this._type}][R] Failed to parse incoming message: ${JSON.stringify(event.data)}`)
      return
    }
    if (!message) {
      // If there is no data in the event this is not a SIMID message.
      return
    }

    // A sessionId is valid in one of two cases:
    // 1. It is not set and the message type is createSession.
    // 2. The session ids match exactly.
    const isCreatingSession = this._sessionId === '' && message.type === ProtocolMessage.CREATE_SESSION
    const isSessionIdMatch = this._sessionId === message.sessionId
    const validSessionId = isCreatingSession || isSessionIdMatch

    if (!validSessionId || message.type == null) {
      // Ignore invalid messages.
      return
    }

    // There are 2 types of messages to handle:
    // 1. Protocol messages (like resolve, reject and createSession)
    // 2. Messages starting with SIMID:
    // All other messages are ignored.
    switch (message.type) {
      case ProtocolMessage.CREATE_SESSION:
        this._sessionId = message.sessionId
        this.resolveMessage(message)
        this._invokeMessageListeners(message)
        break
      case ProtocolMessage.RESOLVE:
      case ProtocolMessage.REJECT:
        this._invokeResponseListener(message)
        break
      default:
        if (message.type.startsWith(SIMID_NS)) {
          this._invokeMessageListeners(message)
        }
        break
      }
  }

  protected postMessage(message: Message) {
    this.log(`[SIMID][${this._type}][S] ${JSON.stringify(message)}`)
    this._target.postMessage(JSON.stringify(message), '*')
  }

  protected resolveMessage(incomingMessage: Message, outgoingArgs?: any) {
    const args: ResolveMessageArgs = {
      messageId: incomingMessage.messageId,
      value: outgoingArgs,
    }
    const message = this._createMessage(ProtocolMessage.RESOLVE, args)
    this.postMessage(message)
  }

  /**
   * Rejects an incoming message.
   * @param {!Object} incomingMessage the message that is being resolved.
   * @param {!Object} outgoingArgs Any arguments that are part of the resolution.
   */
  protected rejectMessage(incomingMessage: Message, errorCode?: number, errorMessage?: string) {
    const value: RejectMessageArgsValue = {
      errorCode,
      message: errorMessage,
    }
    const args: ResolveMessageArgs = {
      messageId: incomingMessage.messageId,
      value,
    }
    const message = this._createMessage(ProtocolMessage.REJECT, args)
    this.postMessage(message)
  }

  protected log(message) {
    const color = 'color:' + LOG_COLORS[this._type] + ';'
    console.log('%c' + message, color)
  }

  /**
   * Reset/revert this protocol to its original state
   */
  protected resetSession() {
    this._listeners.clear()
    this._sessionId = ''
    this._nextMessageId = 1
    // TODO: Perhaps we should reject all associated promises.
    this._responseListeners.clear()
    window.removeEventListener('message', this._messageHandler, false)
    this._messageHandler = undefined
  }

  // #endregion PROTECTED METHODS

  // #region PRIVATE METHODS
  private _createMessage(type: string, args?: any): Message {
    // Incrementing between messages keeps each message id unique.
    const messageId = this._nextMessageId++

    // The message object as defined by the SIMID spec.
    const message: Message = {
      type: type,
      sessionId: this._sessionId,
      messageId: messageId,
      timestamp: Date.now(),
      args: args
    }

    return message
  }

  private _sendMessage(message: Message): Promise<void> {
    if (MessagesWithResponse.includes(message.type)) {
      // If the message requires a callback this code will set
      // up a promise that will call resolve or reject with its parameters.
      return new Promise((resolve, reject) => {
        this._addResponseListener(message.messageId, resolve, reject)
        this.postMessage(message)
      })
    }
    // A default promise will just resolve immediately.
    // It is assumed no one would listen to these promises, but if they do it will "just work".
    return new Promise((resolve, reject) => {
      this.postMessage(message)
      resolve()
    })
  }

  /**
   * Sets up a listener for response resolve/reject messages.
   * @private
   */
  private _addResponseListener(messageId: number, resolve: (args: any) => void, reject: (args: RejectMessageArgsValue) => void) {
    const listener = (response: Message) => {
      if (response.type === ProtocolMessage.RESOLVE) {
        resolve(response.args)
      } else if (response.type === ProtocolMessage.REJECT) {
        reject(response.args)
      }
    }
    this._responseListeners.set(messageId, listener.bind(this))
  }

  private _invokeResponseListener(message: Message) {
    const args = message.args as ResolveMessageArgs
    const correlatingId = args.messageId
    this._responseListeners.get(correlatingId)?.(message)
    this._responseListeners.delete(correlatingId)
  }

  private _invokeMessageListeners(message: Message) {
    this._listeners.get(message.type)?.forEach((listener) => listener(message))
  }
}
// #endregion PRIVATE METHODS
