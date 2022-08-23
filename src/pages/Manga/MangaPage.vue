<template>
  <div class="manga-page-container">
    <div v-if="isLoading">
      <SkeletonPage />
    </div>
    <div v-else>
      <transition name="fade" mode="out-in" appear>
        <div class="manga-page">
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
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAnime } from "@/composable/useAnime";

import AnimeDetailsTitle from "@/components/AnimePage/AnimeDetailsTitle.vue";
import AnimeDetailsMainInfo from "@/components/AnimePage/AnimeDetailsMainInfo.vue";
import SkeletonPage from "@/components/Skeletons/SkeletonPage.vue";

const route = useRoute();
const { anime: manga, isLoading, fetchManga } = useAnime();

onMounted(() => {
  fetchManga(route.params?.id);
});
</script>

<style scoped>
.manga-page {
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
  .manga-page {
    grid-template-areas:
      "title title"
      "logo logo"
      "maininfo maininfo";
  }
}
</style>
