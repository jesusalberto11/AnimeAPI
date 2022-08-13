<template>
  <div class="anime-details-container">
    <AnimeDetailsTitle
      :title="props.anime?.title"
      :ttitleEnglish="props.anime?.title_english"
    />
    <div class="anime-logo">
      <img
        v-bind:src="props.anime?.images.jpg.image_url"
        v-bind:alt="props.anime?.title"
        v-bind:height="340"
        v-bind:width="220"
      />
    </div>
    <AnimeDetailsMainInfo
      :score="props.anime?.score"
      :scoredBy="props.anime?.scored_by"
      :rank="props.anime?.rank"
      :popularity="props.anime?.popularity"
      :favorites="props.anime?.favorites"
      :synopsis="props.anime?.synopsis"
    />
    <AnimeDetailsTrailer :trailerEmbedUrl="props.anime?.trailer.embed_url" />
    <AnimeDetailsSecondInfo
      :type="props.anime?.type"
      :episodes="props.anime?.episodes"
      :duration="props.anime?.duration"
      :status="props.anime?.status"
      :aired="props.anime?.aired.string"
      :rating="props.anime?.rating"
      :background="props.anime?.background"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import AnimeDetailsTitle from "./AnimeDetailsTitle.vue";
import AnimeDetailsMainInfo from "./AnimeDetailsMainInfo.vue";
import AnimeDetailsSecondInfo from "./AnimeDetailsSecondInfo.vue";
import AnimeDetailsTrailer from "./AnimeDetailsTrailer.vue";

const props = defineProps({
  anime: {
    type: null,
    required: true,
    default: null,
  },
});
</script>

<style scoped>
.anime-details-container {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto 340px;
  grid-template-areas:
    "title title"
    "logo maininfo"
    "trailer secondinfo";
}

.anime-logo {
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

@media screen and (max-width: 1348px) {
  .anime-details-container {
    grid-template-areas:
      "title title"
      "logo logo"
      "maininfo maininfo"
      "trailer trailer"
      "secondinfo secondinfo";
  }
}
</style>
