import * as VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AnimeListPage from "../pages/AnimeListPage.vue";
import AnimePage from "../pages/AnimePage";
import TopAnimesPage from "../pages/TopAnimesPage.vue";
import SearchResultsPage from "../pages/SearchResultsPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import MangaPage from "../pages/Manga/MangaPage.vue";
import PathNotFound from "../pages/PathNotFound.vue";

const routes = [
  { path: "/", redirect: "/animes" },
  { path: "/home", name: "home", component: HomePage },
  { path: "/animes", name: "animes", component: AnimeListPage },
  { path: "/top", name: "top", component: TopAnimesPage },
  { path: "/animes/anime/:id", name: "anime", component: AnimePage },
  { path: "/results", name: "results", component: SearchResultsPage },
  { path: "/about", name: "about", component: AboutPage },
  { path: "/mangas", name: "mangas", component: MangaPage },
  { path: "/:pathMatch(.*)*", name: "not-found", component: PathNotFound },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
