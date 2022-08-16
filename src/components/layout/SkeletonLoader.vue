<template>
  <div
    class="skeleton"
    :class="props?.type"
    :style="{ height: props?.height, width: props?.width }"
  ></div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: String,
  height: String,
  width: String,
});
</script>

<style scoped>
.box {
  border-width: 2px;
}

.img {
  border-radius: 50%;
  height: 180px;
  width: 180px;
}

.text {
  width: 80px;
  height: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.125rem;
}

.skeleton-text:last-child {
  margin-bottom: 0;
  width: 80%;
}

.skeleton {
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
