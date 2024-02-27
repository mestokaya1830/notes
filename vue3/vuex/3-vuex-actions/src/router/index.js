import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuexactions",
    name: "/VuexActions",
    component: () => import('../views/VuexActions.vue')
  },
  {
    path: "/vuexmapactions",
    name: "/VuexMapActions",
    component: () => import('../views/VuexMapActions.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;
