import axios from "axios";
import { storeToRefs } from "pinia";
import { useStore } from "@/store";

export const useAnime = () => {
  const animeStore = useStore();

  const { animes, anime, isLoading } = storeToRefs(animeStore);

  const ANIME_API_URL = "https://api.jikan.moe/v4/anime?q=&page=1";

  /* Fetch anime data and setup in the store */

  const fetchAnimeList = () => {
    animeStore.setLoading(true);
    axios
      .get(ANIME_API_URL)
      .then((response) => onAnimeListResponse(response))
      .catch((error) => console.log("Error in fetchAnimeList: ", error));
  };

  const onAnimeListResponse = (response) => {
    animeStore.setAnimes(response.data.data);
    animeStore.setLoading(false);
  };

  /* Fetch single anime data and setup in the store */

  const fetchAnime = (id) => {
    animeStore.setLoading(true);
    let animeURL = `https://api.jikan.moe/v4/anime/${id}/full`;
    axios
      .get(animeURL)
      .then((response) => onAnimeResponse(response))
      .catch((error) => console.log("Error in fetchAnime: ", error));
  };

  const onAnimeResponse = (response) => {
    animeStore.setAnime(response.data.data);
    animeStore.setLoading(false);
  };

  return {
    // Propierties
    animes,
    anime,
    isLoading,

    // Methods
    fetchAnimeList,
    fetchAnime,
  };
};
