<template>
  <div class="anime-page-container">
    <h3 v-if="isLoading">Loading...</h3>
    <div v-else>
      <div class="anime-details">
        <div class="anime-title-logo">
          <h3>{{ anime?.title }}</h3>
          <img
            v-bind:src="anime?.images.jpg.image_url"
            v-bind:alt="anime?.title"
            v-bind:height="340"
            v-bind:width="220"
          />
          <p>Titles:</p>
          <div v-for="title in anime.titles" v-bind:key="title">
            <p>{{ title?.type }} - {{ title?.title }}</p>
          </div>
        </div>
        <div class="anime-data">
          <h3>Synopis:</h3>
          <p>{{ anime?.synopsis }}</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAnime } from "../composable/useAnime";

const route = useRoute();
const { anime, isLoading, fetchAnime } = useAnime();

onMounted(() => {
  fetchAnime(route.params?.id);
});
</script>

<style scoped>
.anime-page-container {
  height: 100vh;
  width: 100%;

  padding: 20px 20px;

  overflow-y: scroll;
  padding-bottom: 100px;
}

.anime-details {
  background-color: chartreuse;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.anime-title-logo {
  background-color: burlywood;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.anime-data {
  background-color: blueviolet;
  max-width: 800px;
  max-height: 200px;
  overflow-y: auto;
}
</style>
