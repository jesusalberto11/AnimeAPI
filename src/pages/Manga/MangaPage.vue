<template>
  <div class="manga-page-container">
    <div class="manga-list">
      <div v-for="manga in data?.data.data" :key="manga.mal_id">
        <div class="manga-card">
          <img
            v-bind:src="manga?.images.jpg.image_url"
            v-bind:alt="manga?.title"
            v-bind:height="340"
            v-bind:width="220"
          />
          <p class="manga-title">{{ manga?.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const data = ref(null);

onMounted(() => {
  axios
    .get("https://api.jikan.moe/v4/manga")
    .then((response) => (data.value = response))
    .catch((error) => console.log("Error in MangaFetch: ", error));
});
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
