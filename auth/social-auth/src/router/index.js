import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{title:'Home'}
  },
  {
    path: "/login",
    name:'Login',
    component: () => import('../views/Login.vue'),
    meta:{title:'Login'}
  },
  {
    path: "/admin",
    name:'Admin',
    component: () => import('../views/Admin.vue'),
    meta:{title:'Admin'}
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;