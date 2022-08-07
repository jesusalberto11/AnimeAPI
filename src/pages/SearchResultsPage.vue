<template>
  <div class="search-results-container">
    <div v-if="isLoading">
      <h1>Loading...</h1>
    </div>
    <div v-else-if="!isLoading && animes.length === 0">
      <h1>Ups! No se ha encontrado nada con ese nombre</h1>
    </div>
    <div v-else>
      <AnimeList :animes="animes" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useAnime } from "@/composable/useAnime";
import AnimeList from "@/components/AnimeList/AnimeList.vue";

const route = useRoute();
const { animes, isLoading, fetchAnimeQuery } = useAnime();

const searchQuery = ref("");
searchQuery.value = route.query.search;

onMounted(() => {
  fetchAnimeQuery(searchQuery.value);
});

watch(route, (currentValue) => {
  if (
    currentValue.query.search === null ||
    currentValue.query.search === undefined
  )
    return;
  fetchAnimeQuery(currentValue.query.search);
});
</script>

<style scoped>
.search-results-container {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
