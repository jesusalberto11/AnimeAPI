<template>
  <div class="manga-page-container">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div class="manga-list" v-else>
      <div v-for="manga in mangas" :key="manga.mal_id">
        <AnimeCard
          :title="manga?.title"
          :imageSource="manga?.images.jpg.image_url"
          @click="onClickCard(manga?.mal_id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAnime } from "@/composable/useAnime";

import AnimeCard from "@/components/AnimeList/AnimeCard.vue";
import SkeletonList from "@/components/Skeletons/SkeletonList.vue";

const { animes: mangas, fetchTopMangas, isLoading } = useAnime();
const router = useRouter();

onMounted(() => {
  fetchTopMangas();
});

const onClickCard = (mangaID) => {
  router.push({
    name: "manga",
    params: { id: mangaID },
  });
};
</script>

<style scoped>
.manga-page-container {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.manga-list {
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;

  padding-top: 25px;
  padding-bottom: 100px;

  overflow-y: scroll;
}

.manga-card {
  height: 400px;
  width: 220px;
}

.manga-title {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: brown;
}
</style>
