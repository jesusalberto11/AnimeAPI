<template>
  <div class="list-container">
    <div v-for="anime in animes" v-bind:key="anime.malId">
      <div class="anime-card">
        <img
          v-bind:src="anime?.images.jpg.image_url"
          v-bind:alt="anime?.title"
          v-bind:height="340"
          v-bind:width="220"
        />
        <p class="anime-title">{{ anime?.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAnime } from "@/composable/useAnime.js";

const { animes, fetchAnimeList } = useAnime();

onMounted(() => {
  fetchAnimeList();
});
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
}

.anime-card:hover {
  box-shadow: 0 0 5px yellow, 0 0 5px yellowgreen, 0 0 10px yellow;
}

.anime-title {
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  height: 50px;
  width: 220px;
}
</style>
