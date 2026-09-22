import Foundation

struct RejectError: Error {
    let errorCode: Int
    let message: String
}

open class SimidComponent: NSObject {

    // The protocol actor type ('Player' or 'Creative')
    let type: String

    // Default timeout (ms) for messages awaiting a response
    static let DEFAULT_RESPONSE_TIMEOUT_MS: UInt64 = 5000

    // The timeout (ms) for messages awaiting a response
    var responseTimeoutMs: UInt64 = SimidComponent.DEFAULT_RESPONSE_TIMEOUT_MS

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

    func resolveMessage(_ incoming: Message, outgoingArgs: ResolveRejectMessageValue? = nil) {
        let args = ResolveRejectMessageArgs(messageId: incoming.messageId, value: outgoingArgs)
        let message = createMessage(type: ProtocolMessage.RESOLVE, args: args)
        postMessage(message)
    }

    func rejectMessage(_ incoming: Message,
                       errorCode: Int64 = PlayerErrorCode.UNSPECIFIED,
                       errorMessage: String = "") {

        let value = RejectMessageValue(errorCode: errorCode, message: errorMessage)
        let args = ResolveRejectMessageArgs(messageId: incoming.messageId, value: .reject(value))

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
        guard MessagesWithResponse.contains(message.type) else {
            // "fire and forget" like JS: resolve immediately.
            postMessage(message)
            return
        }

        let timeoutMs = responseTimeoutMs

        // Await the creative's resolve/reject.
        let awaitResponse: () async throws -> Void = {
            try await withCheckedThrowingContinuation { continuation in
                self.addResponseListener(message.messageId) { response in
                    if response.type == ProtocolMessage.RESOLVE {
                        continuation.resume(returning: ())
                    } else if response.type == ProtocolMessage.REJECT {
                        guard let rejectArgs = response.args as? ResolveRejectMessageArgs,
                              case .reject(let value) = rejectArgs.value else {
                            continuation.resume(returning: ())
                            return
                        }
                        let error = RejectError(errorCode: Int(value.errorCode), message: value.message)
                        continuation.resume(throwing: error)
                    }
                }
                self.postMessage(message)
            }
        }

        // No timeout requested: await normally.
        guard timeoutMs > 0 else {
            try await awaitResponse()
            return
        }

        // Race the response against a timeout.
        try await withThrowingTaskGroup(of: Void.self) { group in
            group.addTask { try await awaitResponse() }
            group.addTask {
                try await Task.sleep(nanoseconds: timeoutMs * 1_000_000)
                throw RejectError(
                    errorCode: Int(PlayerErrorCode.RESPONSE_TIMEOUT),
                    message: "No response received for \"\(message.type)\" within \(timeoutMs)ms"
                )
            }

            do {
                // First task to finish wins; cancel the other.
                try await group.next()
                group.cancelAll()
            } catch {
                group.cancelAll()
                // Drop the pending response listener on timeout so a late
                // response doesn't invoke a stale continuation.
                self.responseListeners.removeValue(forKey: message.messageId)
                SimidLogger.w("Response timeout for \"\(message.type)\" (messageId: \(message.messageId))")
                throw error
            }
        }
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

    private func addResponseListener(_ messageId: Int, callback: @escaping MessageCallback) {
        responseListeners[messageId] = callback
    }

    private func invokeResponseListener(_ message: Message) {
        guard
            let args = message.args as? ResolveRejectMessageArgs
        else { return }

        let id = args.messageId
        responseListeners[id]?(message)
        responseListeners.removeValue(forKey: id)
    }

    private func invokeMessageListeners(_ message: Message) {
        messageListeners[message.type]?.forEach { $0(message) }
    }
}
