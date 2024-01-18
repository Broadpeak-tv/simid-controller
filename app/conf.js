
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

const USERS_CES = [
  {
    name: 'Mathias',
    key: 'uu1pz54oeiod6r95u6mxp6fh1xprhq'
  },
  {
    name: 'Jeremy',
    key: 'uzb7rgzo9fkt82uhxvevheksunr5yo'
  },
  {
    name: 'Mario',
    key: 'u7ivx9zzfa1f5q1qjo1tdvys48ssrp'
  },
  {
    name: 'Shawn',
    key: 'uxwwuomvb4fqw8bgziyczeuucmznvc'
  },
  {
    name: 'Karen',
    key: 'uyhx3g7n66cuh5hh73zvsy1g4ppfxd'
  },
  {
    name: 'Jacques',
    key: 'uh2hg1u3qc7ewyk45c3knkm76uoh1d'
  },
  {
    name: 'Mathilde',
    key: 'u6kfi938rv84oq1wx7whdwqv36jpva'
  },
  {
    name: 'Xavier',
    key: 'ubde82tdeshdu93cuyo7sjhvd1x6wy'
  },
  {
    name: 'Mark',
    key: 'ubg8yc5c953vwy8kb5ujpwf1qb8rsm'
  },
  {
    name: 'Arnault',
    key: 'u1n5xrcct3yjw2syr3ux2bsdm4doep'
  }
]

const INTERACTIVE_ADS = {
  orange_sms: {
    apiFramework: 'simid',
    iframeResource: '../adserver/banner_nonlinear_tv.html',
    adParams: {
      token: 'a5tto5v7ps1jny7wi6yn9u6e6pwzev',
      users: USERS_CES
    }
  }
}

const DEMO_STREAMS = {
  live_preroll_woman: {
    title: 'Live pre-roll (woman)',
    img: './img/live-preroll-woman.png',
    manifest: 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a957f91e9872f1746/bpk-tv/bpkiofficial/default/index.mpd?category=woman',
    ads: {
      616140: {
        ad: INTERACTIVE_ADS.orange_sms,
        adParams: {
          title: 'Nike Pro',
          link: 'https://www.nike.com/fr/w/nike-pro-3cqxf'
        }
      }
    }  
  },
  live_preroll_family: {
    title: 'Live pre-roll (family)',
    img: './img/live-preroll-family.png',
    manifest: 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a957f91e9872f1746/bpk-tv/bpkiofficial/default/index.mpd?category=family',
    ads: {
      616139: {
        ad: INTERACTIVE_ADS.orange_sms,
        adParams: {
          title: 'Lindt Lindor',
          link: 'https://www.lindt.fr/lindor-cornet-lait-noel-337g'
        }
      }
    }  
  },
  avod_teenagers: {
    title: 'AVOD mid-roll (teenagers)',
    img: './img/avod-teenagers.png',
    manifest: 'https://d3m98thyxwxtvo.cloudfront.net/9bf31c7ff062936a71193233516a9969/bpk-vod/voddemo/default/unity/adam/index.mpd?category=teenagers',
    ads: {
      446206: {
        ad: INTERACTIVE_ADS.orange_sms,
        adParams: {
          title: 'AirHeads Candy',
          link: 'https://www.airheads.com/candy/'
        }
      }
    }  
  }
}