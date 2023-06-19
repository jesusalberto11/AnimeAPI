<template>
  <transition-group name="card" tag="div" appear>
    <div class="anime-card" :key="props?.title">
      <img
        class="anime-card-image"
        v-bind:src="props?.imageSource"
        v-bind:alt="props?.title"
      />
      <p class="card-title" :class="checkTitleLength">{{ props?.title }}</p>
    </div>
  </transition-group>
</template>

<script setup>
import { defineProps, computed } from "vue";

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

const checkTitleLength = computed(() => {
  return {
    "title-normal": props?.title.length < 15,
    "title-short": props?.title.length >= 15 && props?.title.length < 30,
    "title-extra-short": props?.title.length >= 30 && props?.title.length < 45,
    "title-extra-extra-short": props?.title.length >= 45,
  };
});
</script>

<style scoped>
.anime-card {
  cursor: pointer;
}

.anime-card:hover {
  box-shadow: 0 0 5px yellow, 0 0 5px yellowgreen, 0 0 10px yellow;
}

.anime-card-image {
  height: 320px;
  width: 220px;
}

.card-title {
  background-color: var(--ANIME-CARD-TITLE-BACKGROUND-COLOR);

  height: 50px;
  width: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  text-align: center;

  padding-left: 10px;
  padding-right: 10px;
}

.title-normal {
  font-size: 19px;
}

.title-short {
  font-size: 16px;
}

.title-extra-short {
  font-size: 13px;
}

.title-extra-extra-short {
  font-size: 10px;
}

.title-short,
.title-normal,
.title-extra-short,
.title-extra-extra-short {
  text-align: center;
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s ease;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .anime-card-image {
    height: 280px;
    width: 170px;
  }

  .card-title {
    width: 170px;
  }
}
</style>
