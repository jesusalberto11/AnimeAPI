<template>
  <div class="page-container">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div v-else>
      <AnimeList :animes="animes" />
    </div>
    <div class="pagination">
      <div class="pagination-button">First page</div>
      <div>{{ "<-" }} Previous page</div>
      <div>Next page {{ "->" }}</div>
      <div>Last page</div>
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

.pagination {
  grid-area: pagination;

  height: 150px;
  width: 100%;
  background-color: brown;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  gap: 15px;
}
</style>
