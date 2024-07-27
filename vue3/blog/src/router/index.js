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
          component: () => import("../views/client/index.vue"),
          meta: { title: "Home" },
        },
        {
          path: "/:user/posts",
          name: "user-posts",
          component: () => import("../views/client/clientUserPosts.vue"),
          meta: { title: "Posts" },
        },
        {
          path: "/:user/post/:id",
          name: "post-details",
          component: () => import("../views/client/clientPostDetails.vue"),
          meta: { title: "Post Details" },
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/client/register.vue"),
          meta: { title: "Register" },
        },
        {
          path: "/login",
          name: "login",
          component: () => import("../views/client/login.vue"),
          meta: { title: "Login" },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/client/about.vue"),
          meta: { title: "About" },
        },
        {
          path: "/email-verfication",
          name: "email-verfication",
          component: () => import("../views/client/emailVerfication.vue"),
          meta: { title: "Email Verfication" },
        },
        {
          path: "/reset-password/:id",
          name: "reset-password",
          component: () => import("../views/client/resetPassword.vue"),
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
          
        },
        {
          path: "/admin/posts",
          name: "admin-posts",
          component: () => import("../views/admin/adminPosts.vue"),
          meta: { title: "Posts" },
        },
        {
          path: "/admin/post/:id",
          name: "admin-post-details",
          component: () => import("../views/admin/adminPostDetails.vue"),
          meta: { title: "Post Details" },
        },
        {
          path: "/admin/post/edit/:id",
          name: "admin-post-edit",
          component: () => import("../views/admin/adminPostEdit.vue"),
          meta: { title: "Post Edit" },
        },
      ]
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: () => import("../views/client/notFound.vue"),
    },
  ],
});

export default router;
