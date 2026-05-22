import Foundation

open class SimidComponent: NSObject {

    // MARK: - Public / Protected State

    let type: String
    let protocolVersion: String = "1.1"

    var sessionId: String = ""

    var nextMessageId: Int = 1

    var messageListeners: [String: [MessageCallback]] = [:]
    var responseListeners: [Int: MessageCallback] = [:]

    let jsonEncoder = JSONEncoder()
    let jsonDecoder = JSONDecoder()

    // MARK: - Init

    init(type: String) {
        self.type = type
    }

    // MARK: - Abstract

    func postMessage(_ message: String) {
        fatalError("Must be implemented by subclass")
    }

    // MARK: - Listener Management

    func addMessageListener(_ messageType: String, callback: @escaping MessageCallback) {
        if messageListeners[messageType] == nil {
            messageListeners[messageType] = []
        }
        messageListeners[messageType]?.append(callback)
    }

    // MARK: - Sending

    func sendMessage(_ type: String, args: MessageArgs? = nil) async throws {
        let message = createMessage(type: type, args: args)
        try await sendSimidMessage(message)
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

                self.postMessage(encode(message))
            }
        }

        // "fire and forget" like JS resolve immediately
        postMessage(encode(message))
    }

    // MARK: - Receiving

    func receiveMessage(_ messageStr: String) {
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

    // MARK: - Resolve / Reject

    func resolveMessage(_ incoming: Message, outgoingArgs: MediaState? = nil) {
        let args = ResolveMessageArgs(messageId: incoming.messageId, value: outgoingArgs)
        let message = createMessage(type: ProtocolMessage.RESOLVE, args: args)
        postMessage(encode(message))
    }

    func rejectMessage(_ incoming: Message,
                       errorCode: Int64 = PlayerErrorCode.UNSPECIFIED,
                       errorMessage: String = "") {

        let value = RejectMessageValue(errorCode: errorCode, message: errorMessage)
        let args = RejectMessageArgs(messageId: incoming.messageId, value: value)

        let message = createMessage(type: ProtocolMessage.REJECT, args: args)

        postMessage(encode(message))
    }

    // MARK: - Session Reset

    func resetSession() {
        messageListeners.removeAll()
        responseListeners.removeAll()
        sessionId = ""
        nextMessageId = 1
    }

    // MARK: - Internals

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
