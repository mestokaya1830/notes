import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('@/views/register.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/login.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;