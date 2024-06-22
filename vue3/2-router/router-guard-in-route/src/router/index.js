import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import UserDetails from "../views/UserDetails.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import store from "../store/index";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: UserDetails
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: (to, from) => {
      //with store
      console.log(store.state.auth)
      if(!store.state.auth || store.state.auth.name != 'Mesto' || store.state.auth.password != '9090'){//with state
        return {path: '/login'}
      }

      //with localStorage
      // const auth = JSON.parse(localStorage.getItem('auth'))
      // console.log(auth)
      // if(!auth || auth.name != 'Mesto' || auth.password !== '9090'){//with state
      //   return {path: '/login'}
      // }
    }
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;