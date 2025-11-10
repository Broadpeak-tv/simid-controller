import App from './App'

let app: App

export async function initApp() {
    const videoElement: HTMLMediaElement = document.querySelector('video') as HTMLMediaElement
    app = new App()
    app.init()
}

export async function stopApp() {
    if (app) {
        app.reset()
    }
}
