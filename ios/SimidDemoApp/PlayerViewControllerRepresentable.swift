import SwiftUI
import UIKit

struct PlayerViewControllerRepresentable: UIViewControllerRepresentable {

    func makeUIViewController(context: Context) -> PlayerViewController {
        return PlayerViewController()
    }

    func updateUIViewController(_ uiViewController: PlayerViewController, context: Context) {
        // You can send updates from SwiftUI → UIKit here
    }
}
