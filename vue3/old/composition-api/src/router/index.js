import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('@/views/Ref.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('@/views/Reactive.vue')
    },
    {
      path: '/fetchasync',
      name: 'fetchasync',
      component: () => import('@/views/FetchAsync.vue')
    },
    {
      path: '/fetch',
      name: 'fetch',
      component: () => import('@/views/Fetch.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('@/views/Computed.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue')
    },
  ]
})

export default router
