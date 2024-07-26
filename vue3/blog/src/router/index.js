import { createRouter, createWebHistory } from "vue-router";
import ClientLayout from "../views/layouts/client.vue";
import AdminLayout from "../views/layouts/admin.vue";

import store from "@/store";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "client-layout",
      component: ClientLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/clients/index.vue"),
          meta: { title: "Home" },
        },
        {
          path: "/:id/posts",
          name: "user-posts",
          component: () => import("../views/clients/postsUser.vue"),
          meta: { title: "Posts" },
        },
        {
          path: "/:user/post/:id",
          name: "post-details",
          component: () => import("../views/clients/postDetails.vue"),
          meta: { title: "POst Details" },
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/clients/register.vue"),
          meta: { title: "Register" },
        },
        {
          path: "/login",
          name: "login",
          component: () => import("../views/clients/login.vue"),
          meta: { title: "Login" },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/clients/about.vue"),
          meta: { title: "About" },
        },
        {
          path: "/email-verfication",
          name: "email-verfication",
          component: () => import("../views/clients/emailVerfication.vue"),
          meta: { title: "Email Verfication" },
        },
        {
          path: "/reset-password/:id",
          name: "reset-password",
          component: () => import("../views/clients/resetPassword.vue"),
          meta: { title: "Reset Password" },
        },
      ],
    },
    {
      path:'/admin',
      name: 'admin-layout',
      component: AdminLayout,
      beforeEnter: (to, from, next) => {
        if (!store.state.auth) {
          next({ path: "/" });
        } else {
          next();
        }
      },
      children:[
        {
          path: "/admin",
          name: "admin",
          component: () => import("../views/admin/index.vue"),
          meta: { title: "Admin" },
          
        }
      ]
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: () => import("../views/clients/notFound.vue"),
    },
  ],
});

export default router;
