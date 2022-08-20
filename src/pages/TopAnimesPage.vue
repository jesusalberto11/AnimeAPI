<template>
  <div class="top-animes-container" :class="{ overflow: !isLoading }">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div v-else>
      <AnimeList :animes="animes" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAnime } from "@/composable/useAnime";

import AnimeList from "@/components/AnimeList/AnimeList.vue";
import SkeletonList from "@/components/Skeletons/SkeletonList.vue";

const { animes, isLoading, fetchTopAnimes } = useAnime();

onMounted(() => {
  fetchTopAnimes();
});
</script>

<style scoped>
.top-animes-container {
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: auto 100px;
  grid-template-areas: "list";
}

.overflow {
  overflow-y: scroll;
}
</style>
