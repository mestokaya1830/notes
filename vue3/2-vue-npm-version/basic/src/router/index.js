import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/components',
      name: 'components',
      component: (() => import('@/views/Components.vue'))
    },
    {
      path: '/componentevent',
      name: 'componentevent',
      component: (() => import('@/views/ComponentEvent.vue'))
    },
    {
      path: '/componentdynamic',
      name: 'componentdynamic',
      component: (() => import('@/views/ComponentDynamic.vue'))
    },
    {
      path: '/componentglobal',
      name: 'componentglobal',
      component: (() => import('@/views/ComponentGlobal.vue'))
    },
    {
      path: '/computed',
      name: 'computed',
      component: (() => import('@/views/Computed.vue'))
    },
    {
      path: '/classes',
      name: 'classes',
      component: (() => import('@/views/Classes.vue'))
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notfound',
      component: (() => import('@/views/NotFound.vue'))
    },
  ]
})

export default router
