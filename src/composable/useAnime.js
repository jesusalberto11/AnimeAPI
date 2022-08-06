import axios from "axios";
import { storeToRefs } from "pinia";
import { useStore } from "@/store";

export const useAnime = () => {
  const animeStore = useStore();

  const { animes, anime } = storeToRefs(animeStore);

  const ANIME_API_URL = "https://api.jikan.moe/v4/anime?q=&page=1";

  /* Fetch anime data and setup in the store */

  const fetchAnimeList = async () => {
    axios.get(ANIME_API_URL).then((response) => onAnimeListResponse(response));
  };

  const onAnimeListResponse = (response) => {
    console.log(response.data);
    animeStore.setAnimes(response.data.data);
  };

  /* Fetch single anime data and setup in the store */

  const fetchAnime = async (id) => {
    let animeURL = `https://api.jikan.moe/v4/anime/${id}/full`;
    axios.get(animeURL).then((response) => onAnimeResponse(response));
  };

  const onAnimeResponse = (response) => {
    console.log(response);
  };

  return {
    // Propierties
    animes,
    anime,

    // Methods
    fetchAnimeList,
    fetchAnime,
  };
};
