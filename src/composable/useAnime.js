import axios from "axios";
import { storeToRefs } from "pinia";
import { useStore } from "@/store";

export const useAnime = () => {
  const animeStore = useStore();

  const { animes } = storeToRefs(animeStore);

  const ANIME_API_URL = "https://api.jikan.moe/v4/anime";

  /* Fetch anime data and setup the store */

  const fetchAnimeList = () => {
    axios.get(ANIME_API_URL).then((response) => onAnimeListResponse(response));
  };

  const onAnimeListResponse = (response) => {
    animeStore.setAnimes(response.data.data);
  };

  return {
    // Propierties
    animes,

    // Methods
    fetchAnimeList,
  };
};
