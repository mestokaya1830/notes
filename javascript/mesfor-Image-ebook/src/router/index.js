import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/ebook",
      name: "Ebook",
      component: () => import('../views/EbookView.vue'),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import('../views/NotFound.vue'),//or use redirect
    }
  ]
})

export default router
