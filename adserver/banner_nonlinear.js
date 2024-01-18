const Y_OFFSET_PERCENTAGE = .7;
const X_OFFSET_PERCENTAGE = .15;
const WIDTH_PERCENTAGE = .7;
const HEIGHT_PERCENTAGE = .15;

/**
 * A sample SIMID non-linear ad for a banner ad that shows a website when clicked on.
 * P.S: Not all websites can be shown and they would need to allow the x-frame-options
 *      header to sameorigin for the ad to display correctly. More information here:
 *      https://web.dev/samesite-cookies-explained/
 */
class BannerNonLinear extends simid.SimidCreative {
  constructor() {
    super();

    /**
     * The desired text on the banner.
     * @private {?string}
     */
    this.bannerText_ = null;
    
    /**
     * The web URL to be displayed.
     * @private {?string}
     */
    this.webUrl_ = null;

    this._addButtonClickActions();
  }

  /** @override */
  onPlayerInit(message) {
    this._parseAdParams();
    this._dynamicResize();
  }

  /**
   * Checks validity of ad parameters and rejects with proper message if invalid.
   * @private 
   */ 
  _parseAdParams() {
    if (!this.creativeData.adParameters) {
        return {
          errorCode: simid.CreativeErrorCode.UNSPECIFIED, 
          message: 'Ad parameters not found'
        }
    }

    let adParams = {};
    try {
      adParams = JSON.parse(this.creativeData.adParameters);
    } catch (exception) {
      return {
        errorCode: simid.CreativeErrorCode.CREATIVE_INTERNAL_ERROR, 
        message: 'Invalid JSON input for ad parameters'
      }
    }

    if (!adParams['bannerText'] || !adParams['webUrl']) {
      return  {
        errorCode: simid.CreativeErrorCode.UNSPECIFIED, 
        message: 'Required field webUrl not found'
      }
    }

    document.getElementById('ad_text').textContent = adParams['bannerText']; 
    document.getElementById('webpage_container').src = adParams['webUrl'];

    return undefined
  }

  /**
   * Repositions the banner ad according to the dimensions of the video player
   * by calculating desired dimensions and sending a resize request to creative.
   * @private
   */
  _dynamicResize() {
    // This ad requests that the player resize it and move it, so that it is centered within the player.
    let creativeDimensions = {};
    creativeDimensions.x = this.environmentData.videoDimensions.width * X_OFFSET_PERCENTAGE;
    creativeDimensions.y = this.environmentData.videoDimensions.height * Y_OFFSET_PERCENTAGE;
    creativeDimensions.width = this.environmentData.videoDimensions.width * WIDTH_PERCENTAGE;
    creativeDimensions.height = this.environmentData.videoDimensions.height * HEIGHT_PERCENTAGE;

    this.sendRequestResize(this.environmentData.videoDimensions, creativeDimensions)
}

/**
   * Sends a SIMID message whenever an element is clicked.
   * @param {String} elementName The name of the element.
   * @param {String} message The message to send to the player.
   * @param {?Function} callback This gets executed after the message to the player is sent.
   * @private
   */
  _sendMessageOnButtonClick(elementName, message, callback) {
      document.getElementById(elementName).addEventListener('click', async () => {
        try {
          await this.sendMessage(message);
          if (callback) {
            callback();
          }
        } catch (e) {}
      });
  }

  /**
   * Adds actions to different buttons available on the overlay.
   * @private
   */
  _addButtonClickActions() {
    this._sendMessageOnButtonClick('close_ad', simid.CreativeMessage.REQUEST_STOP);
    
    this._sendMessageOnButtonClick('ad_text', simid.CreativeMessage.EXPAND_NONLINEAR, () => {
        document.getElementById('ad_text').classList.add('hidden');
        document.getElementById('content_box').classList.remove('hidden');
    });

    this._sendMessageOnButtonClick('minimize_ad', simid.CreativeMessage.COLLAPSE_NONLINEAR, () => {
        document.getElementById('ad_text').classList.remove('hidden');
        document.getElementById('content_box').classList.add('hidden');
    });
  }
}