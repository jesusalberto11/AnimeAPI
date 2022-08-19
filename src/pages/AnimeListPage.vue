<template>
  <div class="page-container">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div v-else>
      <AnimeList :animes="animes" />
    </div>
    <AppPagination />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAnime } from "@/composable/useAnime.js";
import AnimeList from "../components/AnimeList/AnimeList.vue";
import SkeletonList from "@/components/Skeletons/SkeletonList.vue";
import AppPagination from "../components/layout/AppPagination.vue";

const { animes, isLoading, fetchAnimeList } = useAnime();

onMounted(() => {
  fetchAnimeList();
});
</script>

<style scoped>
.page-container {
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: auto 200px;
  grid-template-areas:
    "list"
    "pagination";

  overflow-y: scroll;

  grid-row-gap: 30px;
}

.list {
  grid-area: list;
}
</style>
