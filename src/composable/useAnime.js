import axios from "axios";
import { storeToRefs } from "pinia";
import { useStore } from "@/store";

export const useAnime = () => {
  const animeStore = useStore();

  const { animes, anime, isLoading, page } = storeToRefs(animeStore);

  /* Fetch anime data and setup in the store */

  const fetchAnimeList = (page = 1) => {
    animeStore.setLoading(true);
    let ANIMES_API_URL = `https://api.jikan.moe/v4/anime?q=&page=${page}&sfw=true`;

    axios
      .get(ANIMES_API_URL)
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

  /* Fetch anime query */

  const fetchAnimeQuery = (query) => {
    animeStore.setLoading(true);
    let QUERY_URL = `https://api.jikan.moe/v4/anime?q=&letter=${query}&page=1&sfw=true`;

    axios
      .get(QUERY_URL)
      .then((response) => onQuerySearchResponse(response))
      .catch((error) => console.log("Error in fetchAnimeList: ", error));
  };

  const onQuerySearchResponse = (response) => {
    animeStore.setAnimes(response.data.data);
    animeStore.setLoading(false);
  };

  /* Fetch top animes */

  const fetchTopAnimes = () => {
    animeStore.setLoading(true);

    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((response) => onTopAnimesResponse(response))
      .catch((error) => console.log("Error in fetchAnimeList: ", error));
  };

  const onTopAnimesResponse = (response) => {
    animeStore.setAnimes(response.data.data);
    animeStore.setLoading(false);
  };

  /* Change the current page for pagination */

  const setPage = (page) => {
    animeStore.setPage(page);
  };

  /* Fetch top 25 characters */

  const fetchTopCharacters = () => {
    animeStore.setLoading(true);

    axios
      .get("https://api.jikan.moe/v4/top/characters")
      .then((response) => onTopCharactersResponse(response))
      .catch((error) => console.log("Error in fetchMangaList: ", error));
  };

  const onTopCharactersResponse = (response) => {
    animeStore.setAnimes(response.data.data);
    animeStore.setLoading(false);
  };

  /* Fetch top 25 mangas */

  const fetchTopMangas = () => {
    animeStore.setLoading(true);

    axios
      .get("https://api.jikan.moe/v4/top/manga")
      .then((response) => onTopMangasResponse(response))
      .catch((error) => console.log("Error in fetchMangaList: ", error));
  };

  const onTopMangasResponse = (response) => {
    animeStore.setAnimes(response.data.data);
    animeStore.setLoading(false);
  };

  /* Fetch top 25 people */

  const fetchTopPeople = () => {
    animeStore.setLoading(true);

    axios
      .get("https://api.jikan.moe/v4/top/manga")
      .then((response) => onTopPeopleResponse(response))
      .catch((error) => console.log("Error in fetchMangaList: ", error));
  };

  const onTopPeopleResponse = (response) => {
    animeStore.setAnimes(response.data.data);
    animeStore.setLoading(false);
  };

  return {
    // Propierties
    animes,
    anime,
    isLoading,
    page,

    // Methods
    fetchAnimeList,
    fetchAnime,
    fetchAnimeQuery,
    fetchTopAnimes,
    setPage,
    fetchTopMangas,
    fetchTopCharacters,
    fetchTopPeople,
  };
};
