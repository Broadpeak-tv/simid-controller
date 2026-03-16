<script setup lang="ts">
import VideoPlayer from "@/components/video-player.vue";

const props = defineProps<{
  modelValue?: boolean;
}>();

const licenseServer = "https://widevine-proxy.appspot.com/proxy";
const manifestUrl = "https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd";
const posterUrl =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png";
</script>

<template>
  <video-player
    :license-server="licenseServer"
    :manifest-url="manifestUrl"
    :poster-url="posterUrl"
  />
</template>
