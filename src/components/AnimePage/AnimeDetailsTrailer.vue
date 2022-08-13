<template>
  <div class="tailer-container">
    <h3 class="trailer-title">Trailer:</h3>
    <div class="trailer-video">
      <div v-if="props?.trailerEmbedUrl">
        <iframe
          width="420"
          height="315"
          :src="props?.trailerEmbedUrl"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <div v-else class="no-video">The API hasn't provied a trailer</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  trailerEmbedUrl: {
    type: String,
    requeried: true,
  },
});
</script>

<style scoped>
.tailer-container {
  grid-area: trailer;
}

.trailer-title {
  padding: 25px 25px;
}

.trailer-video {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-video {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 420px;
  height: 315px;
  background-color: dimgray;

  padding: 25px 25px;
}

@media screen and (max-width: 768px) {
  .no-video {
    width: 210px;
    height: 175px;
  }

  iframe {
    width: 100%;
    max-width: 500px; /*this can be anything you wish, to show, as default size*/
  }
}
</style>
