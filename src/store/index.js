import { defineStore } from "pinia";

export const useStore = defineStore("anime", {
  state: () => {
    return {
      animes: [],
      anime: null,
      isLoading: true,
    };
  },
  getters: {
    /* Getters */
  },
  actions: {
    setAnimes(animes) {
      if (animes === null || animes === undefined) return;
      this.animes = animes;
    },
    setAnime(anime) {
      if (anime === null || anime === undefined) return;
      this.anime = anime;
    },
    setLoading(value) {
      if (value === null || value === undefined) return;
      this.isLoading = value;
    },
  },
});
