import App from './App'

let app: App

export async function initApp() {
    app = new App()
    app.init()
}

export async function stopApp() {
    if (app) {
        app.reset()
    }
}
