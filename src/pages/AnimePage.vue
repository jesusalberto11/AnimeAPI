<template>
  <div class="anime-page-container">
    <h3 v-if="isLoading">Loading...</h3>
    <div v-else>
      <transition name="fade" mode="out-in" appear>
        <div class="anime-details">
          <div class="anime-title-container">
            <div class="anime-title">
              <p v-if="anime?.title_english">{{ anime?.title_english }}</p>
              <p v-else>{{ anime?.title }}</p>
            </div>
          </div>
          <div class="anime-logo">
            <img
              v-bind:src="anime?.images.jpg.image_url"
              v-bind:alt="anime?.title"
              v-bind:height="340"
              v-bind:width="220"
            />
          </div>
          <div class="anime-synopis-background">
            <div class="anime-stats">
              <h3>Ratings:</h3>
              <br />

              <p>
                Score: {{ anime?.score }} - Scored by
                {{ anime?.scored_by }} users
              </p>
              <p>Ranked #{{ anime?.rank }}</p>
              <p>Popularity rank #{{ anime?.popularity }}</p>
              <p>Number of favorites: {{ anime?.favorites }}</p>
              <hr />
            </div>
            <br />
            <h3>Synopis:</h3>
            <br />
            <div class="anime-synopis">
              <p>{{ anime?.synopsis }}</p>
            </div>
            <hr />
          </div>
          <div class="trailer">
            <h3 class="trailer-title">Trailer:</h3>
            <div class="trailer-video">
              <iframe
                width="420"
                height="315"
                :src="anime?.trailer.embed_url"
              />
            </div>
          </div>
          <div class="anime-ratings">
            <h3>Information:</h3>
            <br />
            <div class="information">
              <p>Type: {{ anime?.type }}</p>
              <p>Number of episodes: {{ anime?.episodes }}</p>
              <p>Duration: {{ anime?.duration }}</p>
              <p>Status: {{ anime?.status }}</p>
              <p>Aired: {{ anime?.aired.string }}</p>
              <p>Rating: {{ anime?.rating }}</p>
            </div>
            <br />
            <h3>Background:</h3>
            <br />
            <div class="anime-background">
              <p v-if="anime?.background">{{ anime?.background }}</p>
              <p v-else>
                <i>This Anime hasn't a registered background yet...</i>
              </p>
            </div>
            <hr />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAnime } from "../composable/useAnime";

const route = useRoute();
const { anime, isLoading, fetchAnime } = useAnime();

onMounted(() => {
  fetchAnime(route.params?.id);
});
</script>

<style scoped>
.anime-page-container {
  height: 100vh;
  width: 100%;

  overflow-y: scroll;
  padding-bottom: 100px;
}

.anime-details {
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
