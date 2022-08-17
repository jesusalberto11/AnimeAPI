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
      <SkeletonLoader :type="'text'" height="30px" width="50%" />
      <div class="skeleton-synopsis">
        <SkeletonLoader :type="'box'" height="100%" width="100%" />
      </div>
      <SkeletonLoader :type="'text'" height="30px" width="50%" />
      <div class="skeleton-synopsis">
        <SkeletonLoader :type="'box'" height="100%" width="100%" />
      </div>
    </div>
    <div class="skeleton-trailer">
      <SkeletonLoader :type="'text'" height="30px" width="50%" />
      <div class="trailer"></div>
    </div>
    <div class="skeleton-second-info">
      <SkeletonLoader :type="'text'" height="30px" width="50%" />
      <div class="skeleton-synopsis">
        <SkeletonLoader :type="'box'" height="100%" width="100%" />
      </div>
      <SkeletonLoader :type="'text'" height="30px" width="50%" />
      <div class="skeleton-synopsis">
        <SkeletonLoader :type="'box'" height="100%" width="100%" />
      </div>
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
  padding: 10px 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
}

.skeleton-synopsis {
  height: 120px;
  width: 100%;
}

.skeleton-trailer {
  grid-area: trailer;
  padding: 25px 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
}

.trailer {
  width: 420px;
  height: 315px;
  background-color: dimgray;
  padding: 25px 25px;
}

.skeleton-second-info {
  grid-area: secondinfo;
  padding: 10px 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
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

@media screen and (max-width: 768px) {
  .trailer {
    width: 210px;
    height: 175px;
  }
}
</style>
