import * as VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AnimeListPage from "../pages/AnimeListPage.vue";
import AnimePage from "../pages/AnimePage";
import SearchResultsPage from "../pages/SearchResultsPage.vue";
import PathNotFound from "../pages/PathNotFound.vue";

const routes = [
  { path: "/", redirect: "/animes" },
  { path: "/home", name: "home", component: HomePage },
  { path: "/animes", name: "animes", component: AnimeListPage },
  { path: "/animes/anime/:id", name: "anime", component: AnimePage },
  { path: "/results", name: "results", component: SearchResultsPage },
  { path: "/:pathMatch(.*)*", name: "not-found", component: PathNotFound },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
