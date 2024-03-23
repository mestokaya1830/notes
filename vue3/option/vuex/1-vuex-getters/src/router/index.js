import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuexgetters",
    name: "/VuexGetters",
    component: () => import('../views/VuexGetters.vue')
  },
  {
    path: "/vuexmapgetters",
    name: "/VuexMapGetters",
    component: () => import('../views/VuexMapGetters.vue')
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
