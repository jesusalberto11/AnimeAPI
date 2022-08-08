<template>
  <div class="anime-card">
    <img
      v-bind:src="props?.imageSource"
      v-bind:alt="props?.title"
      v-bind:height="340"
      v-bind:width="220"
    />
    <p class="anime-title">{{ props?.title }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  imageSource: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
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
