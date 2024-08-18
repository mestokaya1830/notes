import { createWebHistory, createRouter } from "vue-router";

//layouts
import ClientLayout from "@/layouts/client-layout.vue";
import AdminLayout from "@/layouts/admin-layout.vue";

const routes = [
  {
    path:'/',
    nme:'client-layout',
    component: ClientLayout,
    children:[
      {
        path: "/",
        name: "home",
        component: () => import('../views/client/home.vue'),
      },
      {
        path: "/about",
        name: "about",
        component: () => import('../views/client/about.vue')
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import('../views/client/contact.vue')
      },
    ]
  },
  {
    path: "/admin",
    name: "admin-layout",
    component: AdminLayout,
    children:[
      {
        path:'/admin',
        name:'dashboard',
        component: () => import('../views/admin/dashboard.vue')
      }
    ]
  },
  {
    path: "/:pathName(.*)",
    name: "notfound",
    component: () => import('../views/notfound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;