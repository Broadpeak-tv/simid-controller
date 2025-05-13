package tv.broadpeak.simid.app

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.activity.ComponentActivity
import androidx.tv.material3.ExperimentalTvMaterial3Api

const val DEFAULT_STREAM_URL = "https://d2lwku66j7s1id.cloudfront.net/9bf31c7ff062936a7f941ad65712fad3/out/v1/6e0f649095ca4131b16bd0f877048629/index.mpd?nl-config=demo-samples-live"

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
                    .putExtra("url", DEFAULT_STREAM_URL)
            )
        }
    }
}

