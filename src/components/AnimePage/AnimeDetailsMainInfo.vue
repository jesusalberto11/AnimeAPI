<template>
  <div class="main-info-container">
    <div class="anime-stats">
      <h3>Ratings:</h3>
      <br />
      <p>Score: {{ props?.score }} - Scored by {{ props?.scoredBy }} users</p>
      <p>Ranked #{{ props?.rank }}</p>
      <p>Popularity rank #{{ props?.popularity }}</p>
      <p>Number of favorites: {{ props?.favorites }}</p>
      <hr />
    </div>
    <br />
    <h3>Synopis:</h3>
    <br />
    <div class="anime-synopis">
      <p v-if="props?.synopsis">{{ props?.synopsis }}</p>
      <p v-else>
        <i>This Anime hasn't a registered synopsis yet...</i>
      </p>
    </div>
    <hr />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  score: {
    type: Number,
  },
  scoredBy: {
    type: Number,
  },
  rank: {
    type: Number,
  },
  popularity: {
    type: Number,
  },
  favorites: {
    type: Number,
  },
  synopsis: {
    type: String,
  },
});
</script>

<style scoped>
.main-info-container {
  grid-area: maininfo;
  padding: 10px 10px;
}

.anime-synopis {
  font-size: small;
  max-height: 120px;
  overflow-y: auto;
}

@media screen and (max-width: 768px) {
  .main-info-container {
    padding: 25px 25px;
  }

  .anime-synopis {
    max-height: none;
  }
}
</style>
