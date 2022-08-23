<template>
  <div class="search-results-container">
    <div v-if="isLoading" class="centered-text">
      <h1>Searching...</h1>
    </div>
    <div v-else-if="!isLoading && animes.length === 0" class="centered-text">
      <h1>Ups! No results!</h1>
    </div>
    <div v-else class="list">
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
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: auto 100px;
  grid-template-areas: "list";
  overflow-y: scroll;
}

.centered-text {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list {
  grid-area: list;
}
</style>
