<template>
  <div class="page-container">
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
import { useAnime } from "@/composable/useAnime.js";
import AnimeList from "../components/AnimeList/AnimeList.vue";
import SkeletonList from "@/components/Skeletons/SkeletonList.vue";

const { animes, isLoading, fetchAnimeList } = useAnime();

onMounted(() => {
  fetchAnimeList();
});
</script>

<style scoped>
.page-container {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
