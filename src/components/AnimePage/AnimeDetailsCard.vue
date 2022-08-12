<template>
  <div class="anime-details-container">
    <div class="anime-title-container">
      <div class="anime-title">
        <p v-if="props.anime?.title_english">
          {{ props.anime?.title_english }}
        </p>
        <p v-else>{{ props.anime?.title }}</p>
      </div>
    </div>
    <div class="anime-logo">
      <img
        v-bind:src="props.anime?.images.jpg.image_url"
        v-bind:alt="props.anime?.title"
        v-bind:height="340"
        v-bind:width="220"
      />
    </div>
    <div class="anime-synopis-background">
      <div class="anime-stats">
        <h3>Ratings:</h3>
        <br />

        <p>
          Score: {{ props.anime?.score }} - Scored by
          {{ props.anime?.scored_by }} users
        </p>
        <p>Ranked #{{ props.anime?.rank }}</p>
        <p>Popularity rank #{{ props.anime?.popularity }}</p>
        <p>Number of favorites: {{ props.anime?.favorites }}</p>
        <hr />
      </div>
      <br />
      <h3>Synopis:</h3>
      <br />
      <div class="anime-synopis">
        <p>{{ props.anime?.synopsis }}</p>
      </div>
      <hr />
    </div>
    <div class="trailer">
      <h3 class="trailer-title">Trailer:</h3>
      <div class="trailer-video">
        <iframe
          width="420"
          height="315"
          :src="props.anime?.trailer.embed_url"
        />
      </div>
    </div>
    <div class="anime-ratings">
      <br />
      <h3>Information:</h3>
      <br />
      <div class="information">
        <p>Type: {{ props.anime?.type }}</p>
        <p>Number of episodes: {{ props.anime?.episodes }}</p>
        <p>Duration: {{ props.anime?.duration }}</p>
        <p>Status: {{ props.anime?.status }}</p>
        <p>Aired: {{ props.anime?.aired.string }}</p>
        <p>Rating: {{ props.anime?.rating }}</p>
      </div>
      <br />
      <h3>Background:</h3>
      <br />
      <div class="anime-background">
        <p v-if="anime?.background">{{ props.anime?.background }}</p>
        <p v-else>
          <i>This Anime hasn't a registered background yet...</i>
        </p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  anime: {
    type: null,
    required: true,
    default: null,
  },
});
</script>

<style scoped>
.anime-details-container {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto 340px;
  grid-template-areas:
    "title title"
    "logo synopsis"
    "trailer ratings";
}

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

.anime-logo {
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
}

.anime-synopis-background {
  grid-area: synopsis;
  padding: 10px 10px;
}

.anime-synopis,
.anime-background {
  font-size: small;
  max-height: 120px;
  overflow-y: auto;
}

.anime-ratings {
  grid-area: ratings;
  padding: 10px 10px;
}

.trailer {
  grid-area: trailer;
}

.trailer-title {
  padding: 25px 25px;
}

.trailer-video {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

@media screen and (max-width: 768px) {
  .anime-details {
    grid-template-areas:
      "title title"
      "logo logo"
      "synopsis synopsis"
      "trailer trailer"
      "ratings ratings";
  }

  .anime-synopis-background {
    padding: 25px 25px;
  }
}
</style>
