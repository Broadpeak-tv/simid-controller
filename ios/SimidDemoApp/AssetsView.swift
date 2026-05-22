//
//  WelcomeScreen.swift
//  interstitial-player
//
//  Created by Bertrand Berthelot on 01/10/2025.
//
import SwiftUI
import AVKit

struct Asset: Identifiable, Hashable {
    let id = UUID()
    let title: String
    let url: URL
    let simidURL: URL?
    let adParameters: String?
}

struct AssetsView: View {
    // Example assets
    let assets: [Asset] = [
        Asset(title: "Big Buck Bunny",
              url: URL(string: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8")!,
              simidURL: URL(string: "https://interactiveadvertisingbureau.github.io/SIMID/examples/creatives/banner_nonlinear.html"),
              adParameters: "{\"bannerText\":\"Click here to draw!\",\"webUrl\":\"https://quickdraw.withgoogle.com/\"}"
        ),
        
        Asset(title: "BPK.IO",
              url: URL(string: "https://dcv5s0ei7csoc.cloudfront.net/2ab56412b1163ee103b9ed7065a20563/AVOD/Meridian_1920x1080_30fps_SDR/conditioned/stream.m3u8?midfreq=40&coll=cooldrink&adid=crea&max_ads=1&nldur=20&vdur=600&vod=true")!,
              simidURL: nil,
              adParameters: nil
//              simidURL: URL(string: "https://bpkcscreatives.s3.amazonaws.com/non-linear/templates/base-static-v0.html?user="),
//              adParameters: "{\"mediaArea\": {\"transparent\": false, \"x\": 320, \"y\": 0, \"width\": 1600, \"height\": 900}, \"imageUrl\": \"https://bpkcscreatives.s3.amazonaws.com/non-linear/forge-ad-serve/CoolDrink-LBannerSmall_1920x1080_x320y0w1600h900_base-static-v0.png\", \"creativeId\": \"cooldrink-lbanner-small-nl\", \"adId\": \"mid1_Ad1_cooldrink-lbanner-small\", \"duration\": 20.0}"
        )
    ]
    
    @State private var selectedAsset: Asset?

    var body: some View {
        NavigationView {
            List(assets) { asset in
                NavigationLink(destination:
                    PlayerView(asset: asset)
                        .ignoresSafeArea()
                        .toolbar(.hidden, for: .navigationBar)
                ) {
                    Text(asset.title)
                }
            }
            .navigationTitle("Assets")
        }
        
//        NavigationSplitView {
//
//            List(assets, selection: $selectedAsset) { asset in
//                Text(asset.title)
//                    .tag(asset)
//            }
//            .navigationTitle("Assets")
//
//        } detail: {
//
//            if let asset = selectedAsset {
//                PlayerView(asset: asset)
//                    .ignoresSafeArea()
//                    .toolbar(.hidden, for: .navigationBar)
//            } else {
//                Text("Select an asset")
//                    .foregroundStyle(.secondary)
//            }
//        }
    }

}
