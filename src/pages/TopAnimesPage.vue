<template>
  <div class="top-animes-container">
    <div v-if="isLoading">
      <SkeletonList />
      <h1>Loading...</h1>
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
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
