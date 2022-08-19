<template>
  <div class="page-container" :class="{ overflow: !isLoading }" ref="pageref">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div v-else>
      <AnimeList :animes="animes" />
    </div>
    <AppPagination @on-pagination="handlePaginationClick" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAnime } from "@/composable/useAnime.js";

import AnimeList from "../components/AnimeList/AnimeList.vue";
import SkeletonList from "@/components/Skeletons/SkeletonList.vue";
import AppPagination from "../components/layout/AppPagination.vue";

const router = useRouter();
const { animes, isLoading, fetchAnimeList, page } = useAnime();

const pageref = ref(null);

onMounted(() => {
  router.replace({ path: "/animes", query: { page: page.value } });
  fetchAnimeList(page.value);
});

const handlePaginationClick = () => {
  pageref.value.scrollTop = 0;
  fetchAnimeList(page.value);
  router.replace({ path: "/animes", query: { page: page.value } });
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
