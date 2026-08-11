import SwiftUI
import AVKit

struct Asset: Identifiable, Hashable {
    let id = UUID()
    let title: String
    let url: URL
    let simidURL: URL?
    let adParameters: String?
    let clickThruUrl: String?
}

struct AssetsView: View {
    // Example assets
    let assets: [Asset] = [
        Asset(title: "Big Buck Bunny",
              url: URL(string: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8")!,
              simidURL: URL(string: "http://192.168.10.2:8080/Broadpeak/simid/adserver/creatives/creative-test.html"),
              adParameters: "{\"bannerText\":\"Click here to draw!\",\"webUrl\":\"https://quickdraw.withgoogle.com/\"}",
              clickThruUrl: ""
        ),
        
        Asset(title: "BPK.IO",
              url: URL(string: "https://dcv5s0ei7csoc.cloudfront.net/2ab56412b1163ee103b9ed7065a20563/AVOD/Meridian_1920x1080_30fps_SDR/conditioned/stream.m3u8?midfreq=40&coll=cooldrink&adid=crea&max_ads=1&nldur=20&vdur=600&vod=true")!,
              simidURL: nil,
              adParameters: nil,
              clickThruUrl: ""
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
    }

}
