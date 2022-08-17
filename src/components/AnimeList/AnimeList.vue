<template>
  <transition-group name="list" tag="div" class="list-container" appear>
    <div v-for="anime in props.animes" v-bind:key="anime.mal_id">
      <AnimeCard
        :title="anime?.title"
        :imageSource="anime?.images.jpg.image_url"
        @click="onClickCard(anime?.mal_id)"
      />
    </div>
  </transition-group>
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
}
</style>
