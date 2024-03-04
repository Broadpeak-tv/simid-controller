
const CREATIVES = [
  {
    name: 'Non Linear',
    uri: '//localhost:8080/adserver/banner_nonlinear.html',
    adParams: {
      bannerText: 'Click here to expand',
      webUrl: 'https://broadpeak.tv/'
    }
  },
  {
    name: 'Non Linear for TV',
    uri: '//localhost:8080/adserver/banner_nonlinear_tv.html',
    adParams: {
    }
  }
]

const USERS = [
  {
    name: 'Bertrand',
    key: 'uqhvjmdf1uh58uzbhi25eaho5x18i8',
    number: '0687041234'
  },
  {
    name: 'Mathias',
    key: 'uu1pz54oeiod6r95u6mxp6fh1xprhq',
    number: '0687041667'
  }
]

const INTERACTIVE_ADS = {
  orange_sms: {
    apiFramework: 'simid',
    iframeResource: '../adserver/banner_nonlinear_tv.html'
  }
}

const DEMO_STREAMS = {
  live_preroll_woman: {
    title: 'Live pre-roll (woman)',
    img: './img/live-preroll-woman.png',
    manifest: 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a957f91e9872f1746/bpk-tv/bpkiofficial/default/index.mpd?category=woman',
    adsExtData: {
      616140: {
        nonLinearAd: {
          ...INTERACTIVE_ADS.orange_sms,
        adParams: {
            token: 'a5tto5v7ps1jny7wi6yn9u6e6pwzev',
            users: USERS,
          title: 'Nike Pro',
          link: 'https://www.nike.com/fr/w/nike-pro-3cqxf'
        }
      }
    }  
    }  
  },
  live_preroll_family: {
    title: 'Live pre-roll (family)',
    img: './img/live-preroll-family.png',
    manifest: 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a957f91e9872f1746/bpk-tv/bpkiofficial/default/index.mpd?category=family',
    adsExtData: {
      616139: {
        nonLinearAd: {
          ...INTERACTIVE_ADS.orange_sms,
        adParams: {
            token: 'a5tto5v7ps1jny7wi6yn9u6e6pwzev',
            users: USERS,
          title: 'Lindt Lindor',
          link: 'https://www.lindt.fr/lindor-cornet-lait-noel-337g'
        }
      }
    }  
    }  
  },
  avod_teenagers: {
    title: 'AVOD mid-roll (teenagers)',
    img: './img/avod-teenagers.png',
    manifest: 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a71193233516a9969/bpk-vod/voddemo/default/unity/adam/index.mpd?category=teenagers',
    adsExtData: {
      446206: {
        nonLinearAd: {
          ...INTERACTIVE_ADS.orange_sms,
        adParams: {
            token: 'a5tto5v7ps1jny7wi6yn9u6e6pwzev',
            users: USERS,
          title: 'AirHeads Candy',
          link: 'https://www.airheads.com/candy/'
        }
      }
    }  
  }
}
}