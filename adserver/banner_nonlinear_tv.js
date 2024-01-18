const WIDTH_PERCENTAGE = 1;
const HEIGHT_PERCENTAGE = .14;

const PUSHOVER_API_URL = 'https://api.pushover.net/1/messages.json'

class BannerNonLinearTv extends simid.SimidCreative {
  constructor() {
    super();

    // Get UI elements
    this._cta = document.getElementById('cta')
    this._user = document.getElementById('user')
    this._buttonOther = document.getElementById('other')
    this._buttonOk = document.getElementById('ok')

    this._buttonOther.onclick = (e) => this._onClickButtonOther(e)
    this._buttonOk.onclick = (e) => this._onClickButtonOk(e)

    this._buttonOk.focus()

    this._userIndex = 0

    // Create data
    this.adParams = {}
  }

  /** @override */
  onPlayerInit(message) {

    if (this.creativeData.adParameters) {
      this.adParams = JSON.parse(this.creativeData.adParameters)
    }

    if (this.adParams.users) {
      this._user.innerText = this.adParams.users[this._userIndex].name
    }

    this._requestResize();
  }

  /** @override */
  onPlayerKeyDown(message) {
    const key = message.args.key
    switch(key) {
    case 'Enter':
      if (this._buttonOther.className === 'focused') {
        this._onClickButtonOther()
      } else {
        this._onClickButtonOk()
      }
      break
    case 'ArrowRight':
      if (this._buttonOther.className === 'focused') {
        this._buttonOther.className = 'unfocused'
        this._buttonOk.className = 'focused'
      }
      break
    case 'ArrowLeft':
      if (this._buttonOk.className === 'focused') {
        this._buttonOk.className = 'unfocused'
        this._buttonOther.className = 'focused'
        this._cta.innerText = 'Send message to '
      }
      break
    default:
      break
    }
  }

  _requestResize() {
    // Set creative as a banner with height = 15% of player height
    const height = Math.round(this.environmentData.creativeDimensions.height * 0.15)
    let creativeDimensions = {};
    creativeDimensions.x = 0;
    creativeDimensions.y = this.environmentData.creativeDimensions.height - height;
    creativeDimensions.width = this.environmentData.creativeDimensions.width;
    creativeDimensions.height = height;

    // Resize video so that creative does not overlay on video
    let videoDimensions = this.environmentData.videoDimensions
    videoDimensions.x = 0;
    videoDimensions.y = 0;
    videoDimensions.width = this.environmentData.videoDimensions.width;
    videoDimensions.height = videoDimensions.height - height;

    this.sendRequestResize(videoDimensions, creativeDimensions)
  }

  _onClickButtonOther(event) {
    this._displayNextNumber()
  }

  _onClickButtonOk(event) {
    const user = this.adParams.users[this._userIndex]
    if (!this.adParams.token || !user.key) {
      return
    }
    fetch(PUSHOVER_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        token: this.adParams.token,
        user: user.key,
        title: this.adParams.title,
        message: this.adParams.link
      })
    })
    this._cta.innerText = 'Message sent to '
  }

  _displayNextNumber() {
    if (!this.adParams.users || this.adParams.users.length < 1) {
      return
    }
    this._userIndex = (this._userIndex + 1) % this.adParams.users.length
    this._user.innerText = this.adParams.users[this._userIndex].name
  }
}