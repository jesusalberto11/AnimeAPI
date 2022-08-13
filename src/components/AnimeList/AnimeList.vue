<template>
  <div class="list-container">
    <div v-for="anime in props.animes" v-bind:key="anime.mal_id">
      <AnimeCard
        :title="anime?.title"
        :imageSource="anime?.images.jpg.image_url"
        @click="onClickCard(anime?.mal_id)"
      />
    </div>
    <NPagination
      v-model:page="currentPage"
      :page-count="100"
      size="large"
      :on-update:page="onChangePagination"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import { NPagination } from "naive-ui";
import { useAnime } from "@/composable/useAnime";

import AnimeCard from "./AnimeCard.vue";

const { fetchAnimeList } = useAnime();

const currentPage = ref(1);

const router = useRouter();

const props = defineProps({
  animes: {
    type: Array,
    required: true,
  },
});

const onClickCard = (animeId) => {
  router.push({
    name: "anime",
    params: { id: animeId },
  });
};

const onChangePagination = (page) => {
  console.log(page);
  fetchAnimeList(page);

  currentPage.value = page;
};
</script>

<style scoped>
.list-container {
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
