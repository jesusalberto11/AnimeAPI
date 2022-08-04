import { defineStore } from "pinia";

export const useStore = defineStore("anime", {
  state: () => {
    return {
      animes: [],
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
  },
});
