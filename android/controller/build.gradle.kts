plugins {
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.serialization)
    kotlin("android")
}

android {
    namespace = "tv.broadpeak.simid.controller"
    compileSdk = libs.versions.android.compileSdk.get().toInt()

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }

    defaultConfig {
        minSdk = libs.versions.android.minSdk.get().toInt()
        buildConfigField("String", "VERSION", "\"${rootProject.version}\"")
        consumerProguardFiles("consumer-rules.pro")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    buildFeatures {
        buildConfig = true
    }



    kotlinOptions {
        jvmTarget = "11"
    }
}

dependencies {
    //noinspection UseTomlInstead
    implementation(libs.kotlinx.coroutines.core)
    implementation(libs.kotlinx.serialization.json)
    implementation(libs.kotlinx.datetime)

//    implementation("androidx.core:core-ktx:1.16.0")
//    implementation("androidx.appcompat:appcompat:1.7.1")
//    implementation("com.google.android.material:material:1.12.0")
//    testImplementation("junit:junit:4.13.2")
//    androidTestImplementation("androidx.test.ext:junit:1.2.1")
//    androidTestImplementation("androidx.test.espresso:espresso-core:3.6.1")
//    implementation("com.google.code.gson:gson:2.11.0")
//    implementation("org.apache.commons:commons-text:1.3")
}