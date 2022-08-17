<template>
  <div class="anime-page-container">
    <div v-if="isLoading">
      <SkeletonPage />
    </div>
    <div v-else>
      <transition name="fade" mode="out-in" appear>
        <AnimeDetailsCard :anime="anime" />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAnime } from "../composable/useAnime";

import AnimeDetailsCard from "@/components/AnimePage/AnimeDetailsCard.vue";
import SkeletonPage from "@/components/Skeletons/SkeletonPage.vue";

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

  overflow-y: scroll;
  padding-bottom: 100px;
}
</style>
