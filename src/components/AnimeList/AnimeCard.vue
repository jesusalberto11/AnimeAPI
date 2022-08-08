<template>
  <div class="anime-card">
    <img
      v-bind:src="props?.imageSource"
      v-bind:alt="props?.title"
      v-bind:height="340"
      v-bind:width="220"
    />
    <p class="anime-title" :class="checkTitleLength">{{ props?.title }}</p>
  </div>
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
</style>
