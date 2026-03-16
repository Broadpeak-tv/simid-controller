<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";

const props = defineProps<{
  posterUrl?: string;
  licenseServer?: string;
  manifestUrl: string;
}>();

const videoContainer = useTemplateRef("videoContainer");
const videoPlayer = useTemplateRef("videoPlayer");

const onError = (error: Error | Event) => {
  // Log the error.
  console.error(error);
};

onMounted(async () => {
  const shaka = await import("shaka-player/dist/shaka-player.ui.js");
  const player = new shaka.default.Player();

  if (!videoPlayer.value) {
    return;
  }

  if (!videoContainer.value) {
    return;
  }

  await player.attach(videoPlayer.value);

  const ui = new shaka.default.ui.Overlay(player, videoContainer.value, videoPlayer.value);
  ui.getControls();

  player.addEventListener("error", onError);

  player.configure({
    drm: {
      servers: { "com.widevine.alpha": props.licenseServer },
    },
  });

  player.load(props.manifestUrl).then(onError);
});
</script>

<template>
  <div ref="videoContainer">
    <video id="video" ref="videoPlayer" class="w-full h-full" :poster="posterUrl"></video>
  </div>
</template>
<style>
@import "../../node_modules/shaka-player/dist/controls.css";
</style>
