//
//  ContentView.swift
//  interstitial-player
//
//  Created by Bertrand Berthelot on 01/10/2025.
//

import SwiftUI
import AVKit

struct PlayerView: UIViewControllerRepresentable {
    let asset: Asset
    
    func makeUIViewController(context: Context) -> PlayerViewController {
        let vc = PlayerViewController()
        vc.asset = asset
//        vc.modalPresentationStyle = .fullScreen
        return vc
    }
    
    func updateUIViewController(_ uiViewController: PlayerViewController, context: Context) {
        // no-op
    }
}
