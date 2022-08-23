<template>
  <div class="manga-page-container">
    <AnimeDetailsTitle
      :title="manga?.title"
      :titleEnglish="manga?.title_english"
    />
    <div class="manga-logo">
      <img
        v-bind:src="manga?.images.jpg.image_url"
        v-bind:alt="manga?.title"
        v-bind:height="340"
        v-bind:width="220"
      />
    </div>
    <AnimeDetailsMainInfo
      :score="manga?.score"
      :scoredBy="manga?.scored_by"
      :rank="manga?.rank"
      :popularity="manga?.popularity"
      :favorites="manga?.favorites"
      :synopsis="manga?.synopsis"
    />
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import AnimeDetailsTitle from "@/components/AnimePage/AnimeDetailsTitle.vue";
import AnimeDetailsMainInfo from "@/components/AnimePage/AnimeDetailsMainInfo.vue";

const route = useRoute();
const manga = ref(null);

onMounted(() => {
  axios
    .get(`https://api.jikan.moe/v4/manga/${route.params?.id}/full`)
    .then((response) => (manga.value = response.data.data))
    .catch((error) => console.log("Error in fetchManga: ", error));
});
</script>

<style scoped>
.manga-page-container {
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 340px;
  grid-template-areas:
    "title title"
    "logo maininfo"
    "logo maininfo";

  overflow-y: scroll;

  padding-bottom: 100px;
}

.manga-logo {
  grid-area: logo;
  display: flex;
  justify-content: center;
}

.manga-details {
  grid-area: maininfo;
  padding-right: 50px;
}

@media screen and (max-width: 1348px) {
  .manga-page-container {
    grid-template-areas:
      "title title"
      "logo logo"
      "maininfo maininfo";
  }
}
</style>
