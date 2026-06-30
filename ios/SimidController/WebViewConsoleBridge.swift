import WebKit

final class WebViewConsoleBridge: NSObject, WKScriptMessageHandler {

    static let handlerName = "console"

    func userContentController(
        _ userContentController: WKUserContentController,
        didReceive message: WKScriptMessage
    ) {
        guard let body = message.body as? [String: Any],
              let level = body["level"] as? String,
              let text = body["message"] as? String
        else { return }

        print("[JS][\(level.uppercased())] \(text)")
    }

    static func makeConsoleScript() -> WKUserScript {

        let js = """
        (function() {

            function send(level, args) {
                try {
                    const msg = Array.from(args)
                        .map(v => {
                            try {
                                return typeof v === 'object'
                                    ? JSON.stringify(v)
                                    : String(v);
                            } catch(e) {
                                return String(v);
                            }
                        })
                        .join(' ');

                    window.webkit.messageHandlers.console.postMessage({
                        level: level,
                        message: msg
                    });
                } catch(e) {}
            }

            const originalLog = console.log;
            const originalWarn = console.warn;
            const originalError = console.error;
            const originalInfo = console.info;

            console.log = function() {
                send('log', arguments);
                originalLog.apply(console, arguments);
            };

            console.warn = function() {
                send('warn', arguments);
                originalWarn.apply(console, arguments);
            };

            console.error = function() {
                send('error', arguments);
                originalError.apply(console, arguments);
            };

            console.info = function() {
                send('info', arguments);
                originalInfo.apply(console, arguments);
            };

        })();
        """

        return WKUserScript(
            source: js,
            injectionTime: .atDocumentStart,
            forMainFrameOnly: false
        )
    }
}
