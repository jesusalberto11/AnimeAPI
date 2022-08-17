<template>
  <div class="skeleton-list-container">
    <h1>Hello world skeleton-list</h1>
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
</template>

<script setup>
import SkeletonLoader from "../layout/SkeletonLoader.vue";
</script>

<style scoped>
.skeleton-list-container {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
