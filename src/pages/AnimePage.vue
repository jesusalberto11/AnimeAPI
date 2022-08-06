<template>
  <div class="anime-page-container">
    <h1>Hello world anime page!</h1>
    <h3 v-if="isLoading">Loading...</h3>
    <div v-else>
      <h1>{{ anime?.title }}</h1>
      <p>{{ anime?.images }}</p>
      <p>{{ anime?.synopsis }}</p>
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

<style scoped></style>
