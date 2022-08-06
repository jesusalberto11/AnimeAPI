<template>
  <div class="list-container">
    <div v-for="anime in props.animes" v-bind:key="anime?.mal_id">
      <div class="anime-card" @click="onClickCard(anime?.mal_id)">
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
import { defineProps } from "vue";
import { useRouter } from "vue-router";

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
