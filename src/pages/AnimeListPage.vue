<template>
  <div class="page-container" :class="{ overflow: !isLoading }" ref="page">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div v-else>
      <AnimeList :animes="animes" />
    </div>
    <AppPagination @scroll-to-top="scrollToTop" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAnime } from "@/composable/useAnime.js";
import AnimeList from "../components/AnimeList/AnimeList.vue";
import SkeletonList from "@/components/Skeletons/SkeletonList.vue";
import AppPagination from "../components/layout/AppPagination.vue";

const { animes, isLoading, fetchAnimeList } = useAnime();

const page = ref(null);

onMounted(() => {
  fetchAnimeList();
});

const scrollToTop = () => {
  page.value.scrollTop = 0;
};
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

  grid-row-gap: 30px;
}

.overflow {
  overflow-y: scroll;
}

.list {
  grid-area: list;
}
</style>
