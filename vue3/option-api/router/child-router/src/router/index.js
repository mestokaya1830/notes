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
    path: "/:pathName(.*)*",
    name: "NotFound",
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import('../views/Account.vue'),
    children:[
      {
        path:'/account',
        name:'Bets',
        component: () => import('../views/Account/Bets.vue')
      },
      {
        path:'/users',
        name:'Users',
        component: () => import('../views/Account/Users.vue')
      },
      {
        path:'/users/:id',
        name:'UserDetails',
        component: () => import('../views/Account/UserDetails.vue')
      },
      {
        path:'/profile',
        name:'Profile',
        component: () => import('../views/Account/Profile.vue')
      },
      {
        path:'/balance',
        name:'Balance',
        component: () => import('../views/Account/Balance.vue')
      }
    ]
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;