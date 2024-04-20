import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuexmutations",
    name: "/VuexMutations",
    component: () => import('../views/VuexMutations.vue')
  },
  {
    path: "/vuexmapmutations",
    name: "/VuexMapMutations",
    component: () => import('../views/VuexMapMutations.vue')
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
