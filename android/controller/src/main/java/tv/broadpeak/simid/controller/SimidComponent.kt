package tv.broadpeak.simid.controller

import android.util.Log
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.Deferred

import kotlinx.datetime.Clock
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.decodeFromJsonElement
import kotlinx.serialization.json.encodeToJsonElement

class RejectException(
    val errorCode: Int,
    override val message: String
) : Exception(message)

abstract class SimidComponent (
    // The protocol actor type ('Player' or 'Creative')
    protected val type: String
) {
    companion object {
        private const val TAG = "SimidController"
    }

    // The SIMID protocol supported version
    protected val protocolVersion: String = "1.1"

    // The session ID
    protected var sessionId: String = ""

    @OptIn(ExperimentalSerializationApi::class)
    protected val json = Json {
        explicitNulls = false
    }

    // The next message ID to use when sending a message
    var nextMessageId: Int = 1

    // Sent messages response listeners
    val messageListeners: MutableMap<String, ArrayList<MessageCallback>> = mutableMapOf()

    // Response listeners for sent messages
    val responseListeners: MutableMap<Int, MessageCallback> = mutableMapOf()

    protected fun addMessageListener(messageType: String, callback: MessageCallback) {
        if (!messageListeners.contains(messageType)) {
            messageListeners[messageType] = ArrayList<MessageCallback>()
        }
        messageListeners[messageType]?.add(callback)
    }

    protected fun sendMessage(type: String, args: JsonElement? = null): Deferred<Message?> {
        val message: Message = createMessage(type, args)
        return sendSimidMessage(message)
    }

    protected abstract fun postMessage(message: String)

    protected open fun receiveMessage(messageStr: String) {
        Log.v(TAG, "[SIMID][$type][R]: $messageStr")

        val message: Message = json.decodeFromString<Message>(messageStr)

        // A sessionId is valid in one of two cases:
        // 1. It is not set and the message type is createSession.
        // 2. The session ids match exactly.
        val isCreatingSession: Boolean = sessionId == "" && message.type == ProtocolMessage.CREATE_SESSION
        val isSessionIdMatch: Boolean = sessionId == message.sessionId
        val validSessionId: Boolean = isCreatingSession || isSessionIdMatch

        if (!validSessionId) {
            // Ignore invalid messages.
            return
        }

        // There are 2 types of messages to handle:
        // 1. Protocol messages (like resolve, reject and createSession)
        // 2. Messages starting with SIMID:
        // All other messages are ignored.
        when (message.type) {
            ProtocolMessage.CREATE_SESSION -> {
                sessionId = message.sessionId
                resolveMessage(message)
                invokeMessageListeners(message)
            }
            ProtocolMessage.RESOLVE -> invokeResponseListener(message)
            ProtocolMessage.REJECT -> invokeResponseListener(message)
            else -> {
                if (message.type.startsWith(SIMID_NS)) {
                    invokeMessageListeners(message)
                }
            }
        }
    }

    protected fun resolveMessage(incomingMessage: Message, outgoingArgs: JsonElement? = null) {
        val args = ResolveMessageArgs(incomingMessage.messageId, outgoingArgs)
        val message = createMessage(ProtocolMessage.RESOLVE, json.encodeToJsonElement(args))
        postMessage(message)
    }

    protected fun rejectMessage(incomingMessage: Message, errorCode: Long = PlayerErrorCode.UNSPECIFIED, errorMessage: String = "") {
        val value = RejectMessageValue(errorCode, errorMessage)
        val args = RejectMessageArgs(incomingMessage.messageId, value)
        val message = createMessage(ProtocolMessage.REJECT, json.encodeToJsonElement(args))
        postMessage(message)
    }

    protected fun resetSession() {
        messageListeners.clear()
        sessionId = ""
        nextMessageId = 1
        // TODO: Perhaps we should reject all associated promises.
        responseListeners.clear()
    }

    //region PRIVATE METHODS
    private fun createMessage(type: String, args: JsonElement?): Message {

        // Incrementing between messages keeps each message id unique.
        val messageId: Int = nextMessageId++

        val message: Message = Message(
            type = type,
            sessionId = sessionId,
            messageId = messageId,
            timestamp = Clock.System.now().toEpochMilliseconds(),
            args = args
        )

        return message
    }

    private fun sendSimidMessage(message: Message?): Deferred<Message?> {

        val deferred = CompletableDeferred<Message?>()

        if (message == null) {
            deferred.complete(null)
            return deferred
        }

        if (MessagesWithResponse.contains(message.type)) {
            // If the message requires a callback this code will set
            // up a promise that will call resolve or reject with its parameters.
            addResponseListener(message.messageId, deferred)
        } else {
            // A default promise will just resolve immediately.
            // It is assumed no one would listen to these promises, but if they do it will "just work".
            deferred.complete(null)
        }

        postMessage(message)

        return deferred
    }

    private fun postMessage(message: Message) {
        val messageStr = json.encodeToString(message)
        postMessage(messageStr)
    }

    private fun addResponseListener(messageId: Int, deferred: CompletableDeferred<Message?>) {
        val listener: MessageCallback = fun (response: Message) {
            if (response.type == ProtocolMessage.RESOLVE) {
                deferred.complete(response)
            } else if (response.type == ProtocolMessage.REJECT && response.args != null) {
                val rejectMessageArgs = json.decodeFromJsonElement<RejectMessageArgs>(response.args)
                val exception: RejectException = RejectException(rejectMessageArgs.value.errorCode.toInt(), rejectMessageArgs.value.message)
                deferred.completeExceptionally(exception)
            }
        }
        responseListeners[messageId] = listener
    }

    private fun invokeResponseListener(message: Message) {
        val args: ResolveMessageArgs = json.decodeFromJsonElement<ResolveMessageArgs>(message.args!!)

        val correlatingId = args.messageId
        responseListeners[correlatingId]?.invoke(message)
        responseListeners.remove(correlatingId)
    }

    private fun invokeMessageListeners(message: Message) {
        messageListeners[message.type]?.forEach { listener -> listener(message) }
    }

    //endregion PRIVATE METHODS
}