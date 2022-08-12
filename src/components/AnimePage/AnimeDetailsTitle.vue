<template>
  <div class="anime-title-container">
    <div class="anime-title">
      <p v-if="props?.titleEnglish">
        {{ props?.titleEnglish }}
      </p>
      <p v-else>{{ props?.title }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleEnglish: {
    type: String,
  },
});
</script>

<style scoped>
.anime-title-container {
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
}

.anime-title {
  text-align: center;
  font-size: 24px;
}
</style>
