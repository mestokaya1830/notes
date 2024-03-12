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

router.beforeEach((to, from, next) => {
  //declear isAuthenticated in routes with meta tag
  // if (to.name !== 'Login' && !isAuthenticated) {
  //   next({ name: 'Login' })
  // } else {
  //   next()
  // }
  // test here

  // let num = 0
  // if(num == 0){
  //   console.log(to.name +': '+ 'This come from Router')
  //   next()
  // }

  // You can register a global guard with router.beforeResolve.
  // This is similar to router.beforeEach
  // because it triggers on every navigation,
  // but resolve guards are called right before the navigation is confirmed,
  // after all in-component guards and async route components are resolved

  // router.beforeResolve(async to => {
  //   if (to.meta.requiresCamera) {
  //     try {
  //       await askForCameraPermission()
  //     } catch (error) {
  //       if (error instanceof NotAllowedError) {
  //         // ... handle the error and then cancel the navigation
  //         return false
  //       } else {
  //         // unexpected error, cancel the navigation and pass the error to the global handler
  //         throw error
  //       }
  //     }
  //   }
  // })

  // router.afterEach((to, from) => {
  //   sendToAnalytics(to.fullPath)
  // })
})

export default router;
