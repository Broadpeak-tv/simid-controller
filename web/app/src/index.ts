import App from './App'

let app: App

export async function initApp() {
    const videoElement: HTMLMediaElement = document.querySelector('video') as HTMLMediaElement
    app = new App()
    app.init()
    // await app.init(videoElement)
    // await app.loadStream('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd')
}
