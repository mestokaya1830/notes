import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{title:'Home'}
  },
  {
    path: "/githubdashboard",
    name:'Github Dashboard',
    component: () => import('@/views/GithubDashboard.vue'),
    meta:{title:'Github Dashboard'}
  },
  {
    path: "/googledashboard",
    name:'Google Dashboard',
    component: () => import('@/views/GoogleDashboard.vue'),
    meta:{title:'Google Dashboard'}
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;