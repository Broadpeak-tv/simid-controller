package tv.broadpeak.simid.app

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.activity.ComponentActivity
import androidx.tv.material3.ExperimentalTvMaterial3Api

const val DEFAULT_STREAM_URL = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"

const val DEFAULT_CREATIVE_URL = "https://interactiveadvertisingbureau.github.io/SIMID/examples/creatives/banner_nonlinear.html"
const val DEFAULT_CREATIVE_AD_PARAMS = "{\"bannerText\":\"Click here to draw!\",\"webUrl\":\"https://quickdraw.withgoogle.com/\"}"
const val DEFAULT_CREATIVE_DURATION = 10

const val DEFAULT_STREAM_BPKIO_URL = "https://dcv5s0ei7csoc.cloudfront.net/2ab56412b1163ee103b9ed7065a20563/AVOD/Meridian_1920x1080_30fps_SDR/conditioned/stream.mpd?midfreq=40&coll=cooldrink&adid=crea&max_ads=1&nldur=20&vdur=600&vod=true"

class MainActivity : ComponentActivity() {

    @OptIn(ExperimentalTvMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<View>(R.id.buttonLoadDefault).setOnClickListener {
            startActivity(
                Intent(
                    this,
                    PlayerActivity::class.java
                )
                    .putExtra("url", DEFAULT_STREAM_URL)
                    .putExtra("creativeUrl", DEFAULT_CREATIVE_URL)
                    .putExtra("creativeAdParams", DEFAULT_CREATIVE_AD_PARAMS)
                    .putExtra("creativeDuration", DEFAULT_CREATIVE_DURATION)
            )
        }

        findViewById<View>(R.id.buttonLoadBpkio).setOnClickListener {
            startActivity(
                Intent(
                    this,
                    PlayerActivity::class.java
                )
                    .putExtra("url", DEFAULT_STREAM_BPKIO_URL)
            )
        }
    }
}

