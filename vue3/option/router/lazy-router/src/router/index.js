import { createWebHistory, createRouter } from "vue-router";

//pre loading
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import('../views/Todos.vue')
  },
  {
    path: "/hooks",
    name: "Hooks",
    component: () => import('../views/Hooks.vue')
  },
  {
    path: "/:pathName(.*)*",
    name: "NotFOund",
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