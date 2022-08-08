<template>
  <div class="list-container">
    <div v-for="anime in props.animes" v-bind:key="anime?.mal_id">
      <AnimeCard
        :title="anime?.title"
        :imageSource="anime?.images.jpg.image_url"
        @click="onClickCard(anime?.mal_id)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

import AnimeCard from "./AnimeCard.vue";

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
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding-top: 25px;
  padding-bottom: 25px;

  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 100px;
}
</style>
