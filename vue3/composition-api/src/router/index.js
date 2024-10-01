import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/index.vue";
import Admin from "../views/admin.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/:catchAll(.*)", component: () => import("../views/notfound.vue") },
  { path: "/props", component: () => import("../views/props.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

export default router;
