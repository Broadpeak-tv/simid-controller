import Foundation
import OSLog

public enum SimidLogLevel: Int {
    case verbose = 0
    case debug = 1
    case warning = 2
    case error = 3
    case none = 999
}

public enum SimidLogger {

    /// Enable/disable logs globally
    public static var enabled = true

    /// Minimum level to print
    public static var level: SimidLogLevel = .debug

    private static let logger = Logger(
        subsystem: "tv.broadpeak.simid.controller",
        category: "SIMID"
    )

    public static func v(_ message: String) {
        log(.verbose, message)
    }

    public static func d(_ message: String) {
        log(.debug, message)
    }

    public static func w(_ message: String) {
        log(.warning, message)
    }

    public static func e(_ message: String) {
        log(.error, message)
    }

    private static func log(
        _ logLevel: SimidLogLevel,
        _ message: String
    ) {
        guard enabled else { return }
        guard logLevel.rawValue >= level.rawValue else { return }

        switch logLevel {
        case .verbose:
            logger.debug("[VERBOSE] \(message)")
        case .debug:
            logger.debug("[DEBUG] \(message)")
        case .warning:
            logger.warning("[WARNING] \(message)")
        case .error:
            logger.error("[ERROR] \(message)")
        case .none:
            break
        }
    }
}
