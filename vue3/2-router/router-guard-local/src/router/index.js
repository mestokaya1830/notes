import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: () => import('../views/Users.vue')
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: () => import('../views/UserDetails.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import('../views/Admin.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
})

export default router;
