import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import('../views/About.vue')
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import('../views/Contact.vue')
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import('../views/Admin.vue'),
    children:[
      {
        path:'/admin',
        name:'Users',
        component: () => import('../views/admin/Users.vue')
      },
      {
        path:'/settings',
        name:'Settings',
        component: () => import('../views/admin/Settings.vue')
      },
      {
        path:'/users/:id',
        name:'profile',
        component: () => import('../views/admin/Profile.vue')
      }
    ]
  },
  {
    path: "/:pathName(.*)*",
    name: "NotFound",
    component: () => import('../views/NotFound.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;