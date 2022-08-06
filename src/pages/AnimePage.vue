<template>
  <div class="anime-page-container">
    <h1>Hello world anime page!</h1>
    <h3 v-if="isLoading">Loading...</h3>
    <h3 v-else>
      {{ anime?.title }}
    </h3>
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
