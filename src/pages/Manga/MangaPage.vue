<template>
  <div class="manga-page-container">
    <p>{{ manga?.title }}</p>
    <p>Score: {{ manga?.score }}</p>
    <p>Rank: {{ manga?.rank }}</p>
    <p>{{ manga?.synopsis }}</p>
    <p>{{ manga?.background }}</p>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const manga = ref(null);

onMounted(() => {
  axios
    .get(`https://api.jikan.moe/v4/manga/${route.params?.id}/full`)
    .then((response) => (manga.value = response.data.data))
    .catch((error) => console.log("Error in fetchManga: ", error));
});
</script>

<style scoped>
.manga-page-container {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
