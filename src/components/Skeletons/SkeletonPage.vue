<template>
  <div class="skeleton-page-container">
    <div class="skeleton-title">
      <SkeletonLoader :type="'text'" height="30px" width="95%" />
    </div>
    <div class="skeleton-logo">
      <div class="logo-container">
        <SkeletonLoader :type="'box'" height="100%" width="100%" />
      </div>
    </div>
    <div class="skeleton-main-info">
      <h1>LEL</h1>
    </div>
    <div class="skeleton-trailer">
      <h1>LEL</h1>
    </div>
    <div class="skeleton-second-info">
      <h1>LEL</h1>
    </div>
  </div>
</template>

<script setup>
import SkeletonLoader from "../layout/SkeletonLoader.vue";
</script>

<style scoped>
.skeleton-page-container {
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto 340px;
  grid-template-areas:
    "title title"
    "logo maininfo"
    "trailer secondinfo";
}

.skeleton-title {
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
}

.skeleton-logo {
  grid-area: logo;

  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container {
  height: 340px;
  width: 220px;
}

.skeleton-main-info {
  grid-area: maininfo;
  background-color: cadetblue;
}

.skeleton-trailer {
  grid-area: trailer;
  background-color: blue;
}

.skeleton-second-info {
  grid-area: secondinfo;
  background-color: brown;
}

@media screen and (max-width: 1348px) {
  .skeleton-page-container {
    grid-template-areas:
      "title title"
      "logo logo"
      "maininfo maininfo"
      "trailer trailer"
      "secondinfo secondinfo";
  }
}
</style>
