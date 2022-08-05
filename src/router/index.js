import * as VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AnimeListPage from "../pages/AnimeListPage.vue";
import PathNotFound from "../pages/PathNotFound.vue";

const routes = [
  { path: "/", redirect: "/animes" },
  { path: "/home", name: "home", component: HomePage },
  { path: "/animes", name: "animes", component: AnimeListPage },
  { path: "/:pathMatch(.*)*", name: "not-found", component: PathNotFound },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
