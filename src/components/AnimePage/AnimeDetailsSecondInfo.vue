<template>
  <div class="second-info-container">
    <br />
    <h3>Information:</h3>
    <br />
    <div class="information">
      <p>Type: {{ props?.type }}</p>
      <p>Number of episodes: {{ props?.episodes }}</p>
      <p>Duration: {{ props?.duration }}</p>
      <p>Status: {{ props?.status }}</p>
      <p>Aired: {{ props?.aired }}</p>
      <p>Rating: {{ props?.rating }}</p>
    </div>
    <br />
    <h3>Background:</h3>
    <br />
    <div class="anime-background">
      <p v-if="props?.background">{{ props?.background }}</p>
      <p v-else>
        <i>This Anime hasn't a registered background yet...</i>
      </p>
    </div>
    <hr />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
  },
  episodes: {
    type: Number,
  },
  duration: {
    type: String,
  },
  status: {
    type: String,
  },
  aired: {
    type: String,
  },
  rating: {
    type: String,
  },
  background: {
    type: String,
  },
});
</script>

<style scoped>
.second-info-container {
  grid-area: secondinfo;
  padding: 10px 10px;
}

.anime-background {
  font-size: small;
  max-height: 120px;
  overflow-y: auto;
}

@media screen and (max-width: 768px) {
  .second-info-container {
    padding: 25px 25px;
  }

  .anime-background {
    max-height: none;
  }
}
</style>
