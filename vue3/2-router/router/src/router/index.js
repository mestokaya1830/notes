import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/default.vue'
import AdminLayout from '@/layouts/admin.vue'

import Home from '@/views/client/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          component: Home
        }
      ]
    },
    {
      path: '/admin',
      name: 'adminlayout',
      component: AdminLayout,
      children: [
        {
          path: '/admin',
          name: "admin",
          component: () => import('@/views/admin/index.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('@/views/notfound.vue')
    }
  ]
})

export default router
