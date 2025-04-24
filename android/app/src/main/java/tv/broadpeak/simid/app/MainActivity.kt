package tv.broadpeak.simid.app

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.activity.ComponentActivity
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.tv.material3.ExperimentalTvMaterial3Api
import androidx.tv.material3.Text
import tv.broadpeak.simid.app.ui.theme.SIMIDDemoApplicationTheme

const val DEFAULT_STREAM_URL = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"

class MainActivity : ComponentActivity() {

    @OptIn(ExperimentalTvMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<View>(R.id.buttonLoad).setOnClickListener {
            startActivity(
                Intent(
                    this,
                    PlayerActivity::class.java
                )
//                    .putExtra("url", "https://explo.broadpeak.tv/bpkio-proxy_/9bf31c7ff062936a957f91e9872f1746/bpk-tv/bpkiofficial/default/index.mpd?category=woman&response=200&bk-ml=1")
                    .putExtra("url", "https://explo.broadpeak.tv/bpkio-proxy_/9bf31c7ff062936a4d995bd17f4f0188/bpk-vod/voddemo/default/rugby2/rugby2/index.mpd?response=200&bk-ml=1")
            )
        }
    }
}

