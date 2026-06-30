import Foundation

open class SimidComponent: NSObject {

    // The protocol actor type ('Player' or 'Creative')
    let type: String

    // The SIMID protocol supported version
    let protocolVersion: String = "1.1"

    // The session ID
    var sessionId: String = ""

    // The next message ID to use when sending a message
    var nextMessageId: Int = 1

    // Sent messages response listeners
    var messageListeners: [String: [MessageCallback]] = [:]

    // Response listeners for sent messages
    var responseListeners: [Int: MessageCallback] = [:]

    // JSON endoder/decoder
    let jsonEncoder = JSONEncoder()
    let jsonDecoder = JSONDecoder()

    init(type: String) {
        self.type = type
    }

    func addMessageListener(_ messageType: String, callback: @escaping MessageCallback) {
        if messageListeners[messageType] == nil {
            messageListeners[messageType] = []
        }
        messageListeners[messageType]?.append(callback)
    }

    func sendMessage(_ type: String, args: MessageArgs? = nil) async throws {
        let message = createMessage(type: type, args: args)
        try await sendSimidMessage(message)
    }

    open func postMessage(_ message: String) {
        fatalError("Must be implemented by subclass")
    }

    open func receiveMessage(_ messageStr: String) {
        SimidLogger.d("[SIMID][Player][R] \(messageStr)")
        guard let data = messageStr.data(using: .utf8),
              let message = try? jsonDecoder.decode(Message.self, from: data) else {
            return
        }
        
        let isCreatingSession = sessionId.isEmpty && message.type == ProtocolMessage.CREATE_SESSION
        let isSessionMatch = sessionId == message.sessionId
        guard isCreatingSession || isSessionMatch else { return }

        switch message.type {

        case ProtocolMessage.CREATE_SESSION:
            sessionId = message.sessionId
            resolveMessage(message)
            invokeMessageListeners(message)

        case ProtocolMessage.RESOLVE, ProtocolMessage.REJECT:
            invokeResponseListener(message)

        default:
            if message.type.hasPrefix(SIMID_NS) {
                invokeMessageListeners(message)
            }
        }
    }

    func resolveMessage(_ incoming: Message, outgoingArgs: MediaState? = nil) {
        let args = ResolveMessageArgs(messageId: incoming.messageId, value: outgoingArgs)
        let message = createMessage(type: ProtocolMessage.RESOLVE, args: args)
        postMessage(message)
    }

    func rejectMessage(_ incoming: Message,
                       errorCode: Int64 = PlayerErrorCode.UNSPECIFIED,
                       errorMessage: String = "") {

        let value = RejectMessageValue(errorCode: errorCode, message: errorMessage)
        let args = RejectMessageArgs(messageId: incoming.messageId, value: value)

        let message = createMessage(type: ProtocolMessage.REJECT, args: args)

        postMessage(message)
    }

    func resetSession() {
        messageListeners.removeAll()
        responseListeners.removeAll()
        sessionId = ""
        nextMessageId = 1
    }

    private func createMessage(type: String, args: MessageArgs?) -> Message {
        let messageId = nextMessageId
        nextMessageId += 1
        
        return Message(
            type: type,
            sessionId: sessionId,
            messageId: messageId,
            timestamp: Int64(Date().timeIntervalSince1970 * 1000),
            args: args
        )
    }
        
    private func sendSimidMessage(_ message: Message) async throws {
        if MessagesWithResponse.contains(message.type) {

            return try await withCheckedThrowingContinuation { continuation in

                self.addResponseListener(message.messageId) { response in

                    if response.type == ProtocolMessage.RESOLVE {
                        continuation.resume(returning: ())

                    } else if response.type == ProtocolMessage.REJECT,
                              let rejectArgs = response.args as? RejectMessageArgs {

                        let error = NSError(
                            domain: "SIMID",
                            code: Int(rejectArgs.value.errorCode),
                            userInfo: [NSLocalizedDescriptionKey: rejectArgs.value.message]
                        )

                        continuation.resume(throwing: error)
                    }
                }

                self.postMessage(message)
            }
        }

        // "fire and forget" like JS resolve immediately
        postMessage(message)
    }

    private func postMessage(_ message: Message) {
        let messageStr = encode(message)
        postMessage(messageStr)
    }

    private func encode(_ message: Message) -> String {
        guard let data = try? jsonEncoder.encode(message),
              let string = String(data: data, encoding: .utf8) else {
            return ""
        }
        return string
    }

    private func addResponseListener(_ messageId: Int,
                                      callback: @escaping MessageCallback) {
        responseListeners[messageId] = callback
    }

    private func invokeResponseListener(_ message: Message) {
        guard
            let args = message.args as? ResolveMessageArgs
        else { return }

        let id = args.messageId
        responseListeners[id]?(message)
        responseListeners.removeValue(forKey: id)
    }

    private func invokeMessageListeners(_ message: Message) {
        messageListeners[message.type]?.forEach { $0(message) }
    }
}
