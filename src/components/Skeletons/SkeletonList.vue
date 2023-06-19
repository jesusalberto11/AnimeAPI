<template>
  <div class="skeleton-list-container">
    <div v-for="i in props?.length" :key="i">
      <div class="skeleton-card-body">
        <div class="skeleton-card-image">
          <SkeletonLoader :type="'box'" height="100%" width="100%" />
        </div>
        <div class="skeleton-card-title">
          <SkeletonLoader :type="'text'" width="100%" />
          <SkeletonLoader :type="'text'" width="90%" />
          <SkeletonLoader :type="'text'" width="50%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import SkeletonLoader from "../layout/SkeletonLoader.vue";

const props = defineProps({
  length: {
    type: Number,
    required: false,
    default: 10,
  },
});
</script>

<style scoped>
.skeleton-list-container {
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
}

.skeleton-card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skeleton-card-image {
  height: 340px;
  width: 220px;
}

.skeleton-card-title {
  background-color: brown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 18px;
  text-align: center;
  height: 50px;
  width: 220px;
  padding-left: 10px;
  padding-right: 10px;
}

@media screen and (max-width: 768px) {
  .skeleton-card-image {
    height: 280px;
    width: 170px;
  }

  .skeleton-card-title {
    width: 170px;
  }
}
</style>
