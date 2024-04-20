import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuexcounter",
    name: "/VuexCounter",
    component: () => import('../views/VuexCounter.vue')
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
