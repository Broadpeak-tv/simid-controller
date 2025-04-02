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
  protected _version: string

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

  // Response listeners for sent messages
  protected _responseListeners: Map<number, MessageCallback> 
  // #endregion MEMBERS

  // #region CONSTRUCTOR
  /**
   * Constructor
   * @param type The protocol actor type ('Player' or 'Creative')
   */
  constructor(type: string) {
    this._version = SIMID_VERSION
    this._type = type
    this._listeners = new Map<String, MessageCallback[]>()
    this._sessionId = ''
    this._nextMessageId = 0
    this._responseListeners = new Map<number, MessageCallback>()

    // By default target window is top window, that will be used by the creative
    // The SIMID controller should use the creative iframe window as target window (see SimidPlayer)
    this._target = window.top

    window.addEventListener('message', (event) => {
      setTimeout(() => this.receiveMessage(event), 0)
    }, false)
  }
  // #endregion CONSTRUCTOR

  // #region PROTECTED METHODS
  /**
   * Sends a message using post message.
   * Returns a promise that will resolve or reject after the message receives a response.
   * @param messageType The name of the message.
   * @param messageArgs The arguments for the message, may be null.
   * @return A promise that will be fulfilled when client resolves or rejects.
   */
  protected sendMessage(messageType: string, messageArgs?: any): Promise<void> {
    // console.log(`[SIMID][${this._type}][S]`, messageType, messageArgs || {})

    // Incrementing between messages keeps each message id unique.
    const messageId = this._nextMessageId++
    // Only create session does not need to be in the SIMID name space
    // because it is part of the protocol.
    const nameSpacedMessage = messageType === ProtocolMessage.CREATE_SESSION ? messageType : SIMID_NS + messageType
    // The message object as defined by the SIMID spec.
    const message: Message = {
      sessionId: this._sessionId,
      messageId: messageId,
      type: nameSpacedMessage,
      timestamp: Date.now(),
      args: messageArgs
    }

    if (MessagesWithResponse.includes(messageType)) {
      // If the message requires a callback this code will set
      // up a promise that will call resolve or reject with its parameters.
      return new Promise((resolve, reject) => {
        this._addResponseListener(messageId, resolve, reject)
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
   * Reset/revert this protocol to its original state
   */
  protected reset() {
    this._listeners.clear()
    this._sessionId = ''
    this._nextMessageId = 1
    // TODO: Perhaps we should reject all associated promises.
    this._responseListeners.clear()
  }

  protected setMessageTarget(target: Window) {
    this._target = target
  }

  protected postMessage(message: Message) {
    this.log(`[SIMID][${this._type}][S] ` + JSON.stringify(message))
    this._target.postMessage(JSON.stringify(message), '*')
  }

  protected receiveMessage(event: MessageEvent) {
    if (!event || !event.data) {
      return
    }
    this.log(`[SIMID][${this._type}][R] ` + JSON.stringify(event.data))
    let message: Message | null
    try {
      message = JSON.parse(event.data)
    } catch (e) {
      return
    }
    if (!message) {
      // If there is no data in the event this is not a SIMID message.
      return
    }

    const sessionId = message.sessionId
    const type = message.type
    // A sessionId is valid in one of two cases:
    // 1. It is not set and the message type is createSession.
    // 2. The session ids match exactly.
    const isCreatingSession = this._sessionId === '' && type === ProtocolMessage.CREATE_SESSION
    const isSessionIdMatch = this._sessionId === sessionId
    const validSessionId = isCreatingSession || isSessionIdMatch

    if (!validSessionId || type == null) {
      // Ignore invalid messages.
      return
    }

    // There are 2 types of messages to handle:
    // 1. Protocol messages (like resolve, reject and createSession)
    // 2. Messages starting with SIMID:
    // All other messages are ignored.
    if (Object.values(ProtocolMessage).includes(type)) {
      this._handleProtocolMessage(message)
    } else if (type.startsWith(SIMID_NS)) {
      // Remove SIMID: from the front of the message so we can compare them with the map.
      message.type = type.substring(6)
      // console.log(`[SIMID][${this._type}] R`, message.type, message.args || {})
      const listeners = this._listeners.get(message.type)
      if (listeners) {
        listeners.forEach((listener) => listener(message))
      }
    }
  }

  protected resolveMessage(incomingMessage: Message, outgoingArgs?: any) {
    const messageId = this._nextMessageId++
    const args: ResolveMessageArgs = {
      messageId: incomingMessage.messageId,
      value: outgoingArgs,
    }
    const message: Message = {
      sessionId: this._sessionId,
      messageId: messageId,
      type: ProtocolMessage.RESOLVE,
      timestamp: Date.now(),
      args,
    }
    this.postMessage(message)
  }

  /**
   * Rejects an incoming message.
   * @param {!Object} incomingMessage the message that is being resolved.
   * @param {!Object} outgoingArgs Any arguments that are part of the resolution.
   */
  protected rejectMessage(incomingMessage: Message, outgoingArgs?: any) {
    const messageId = this._nextMessageId++
    const args: ResolveMessageArgs = {
      messageId: incomingMessage.messageId,
      value: outgoingArgs,
    }
    const message: Message = {
      sessionId: this._sessionId,
      messageId: messageId,
      type: ProtocolMessage.REJECT,
      timestamp: Date.now(),
      args,
    }
    this.postMessage(message)
  }

  protected log(message) {
    const color = 'color:' + LOG_COLORS[this._type] + ';'
    console.log('%c' + message, color)
  }

  // #endregion PROTECTED METHODS

  // #region PRIVATE METHODS
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

  /**
   * Handles incoming messages specifically for the protocol
   * @param {Message} message the protocol message
   * @private
   */
  private _handleProtocolMessage(message: Message) {
    switch (message.type) {
      case ProtocolMessage.CREATE_SESSION:
        this._sessionId = message.sessionId
        this.resolveMessage(message)
        const listeners = this._listeners.get(message.type)
        if (listeners) {
          // calls each of the listeners with the data.
          listeners.forEach((listener) => listener(message))
        }
        break
      case ProtocolMessage.RESOLVE:
        // intentional fallthrough
      case ProtocolMessage.REJECT:
        const args = message.args as ResolveMessageArgs
        const correlatingId = args.messageId
        const resolutionFunction = this._responseListeners.get(correlatingId)
        if (resolutionFunction) {
          // If the listener exists call it once only.
          resolutionFunction(message)
          this._responseListeners.delete(correlatingId)
        }
        break
    } 
  }
}
// #endregion PRIVATE METHODS
