import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52fc60c8 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _2b86d88c = () => interopDefault(import('../pages/home/account.vue' /* webpackChunkName: "pages/home/account" */))
const _0455e6bd = () => interopDefault(import('../pages/home/account/index.vue' /* webpackChunkName: "pages/home/account/index" */))
const _f441f53a = () => interopDefault(import('../pages/home/account/basketinplaymarkets.vue' /* webpackChunkName: "pages/home/account/basketinplaymarkets" */))
const _38e83e37 = () => interopDefault(import('../pages/home/account/basketliverate.vue' /* webpackChunkName: "pages/home/account/basketliverate" */))
const _6a73429c = () => interopDefault(import('../pages/home/account/basketmarkets.vue' /* webpackChunkName: "pages/home/account/basketmarkets" */))
const _d809ca6a = () => interopDefault(import('../pages/home/account/basketrate.vue' /* webpackChunkName: "pages/home/account/basketrate" */))
const _718b6880 = () => interopDefault(import('../pages/home/account/basketratelimit.vue' /* webpackChunkName: "pages/home/account/basketratelimit" */))
const _eeb9565c = () => interopDefault(import('../pages/home/account/boss.vue' /* webpackChunkName: "pages/home/account/boss" */))
const _a5b40572 = () => interopDefault(import('../pages/home/account/branch.vue' /* webpackChunkName: "pages/home/account/branch" */))
const _3c66cbf0 = () => interopDefault(import('../pages/home/account/codelist.vue' /* webpackChunkName: "pages/home/account/codelist" */))
const _4a313196 = () => interopDefault(import('../pages/home/account/creditlog.vue' /* webpackChunkName: "pages/home/account/creditlog" */))
const _c6899060 = () => interopDefault(import('../pages/home/account/detailsaccount.vue' /* webpackChunkName: "pages/home/account/detailsaccount" */))
const _9aa12dfa = () => interopDefault(import('../pages/home/account/detailscomission.vue' /* webpackChunkName: "pages/home/account/detailscomission" */))
const _42f06186 = () => interopDefault(import('../pages/home/account/gamelog.vue' /* webpackChunkName: "pages/home/account/gamelog" */))
const _ab5bf0c2 = () => interopDefault(import('../pages/home/account/generalset.vue' /* webpackChunkName: "pages/home/account/generalset" */))
const _147df593 = () => interopDefault(import('../pages/home/account/info.vue' /* webpackChunkName: "pages/home/account/info" */))
const _167e2320 = () => interopDefault(import('../pages/home/account/loginlog.vue' /* webpackChunkName: "pages/home/account/loginlog" */))
const _05d6a0d0 = () => interopDefault(import('../pages/home/account/nextgoals.vue' /* webpackChunkName: "pages/home/account/nextgoals" */))
const _fa0ef6ee = () => interopDefault(import('../pages/home/account/paycupons.vue' /* webpackChunkName: "pages/home/account/paycupons" */))
const _3fef3b54 = () => interopDefault(import('../pages/home/account/profile.vue' /* webpackChunkName: "pages/home/account/profile" */))
const _11db4e88 = () => interopDefault(import('../pages/home/account/register.vue' /* webpackChunkName: "pages/home/account/register" */))
const _78259d04 = () => interopDefault(import('../pages/home/account/setlimit.vue' /* webpackChunkName: "pages/home/account/setlimit" */))
const _2c3e0cda = () => interopDefault(import('../pages/home/account/settime.vue' /* webpackChunkName: "pages/home/account/settime" */))
const _41ea9c9d = () => interopDefault(import('../pages/home/account/singelbets.vue' /* webpackChunkName: "pages/home/account/singelbets" */))
const _3eb89820 = () => interopDefault(import('../pages/home/account/soccerinplaymarkets.vue' /* webpackChunkName: "pages/home/account/soccerinplaymarkets" */))
const _2a39ad4c = () => interopDefault(import('../pages/home/account/soccerliverate.vue' /* webpackChunkName: "pages/home/account/soccerliverate" */))
const _5face719 = () => interopDefault(import('../pages/home/account/soccermarkets.vue' /* webpackChunkName: "pages/home/account/soccermarkets" */))
const _54170f6e = () => interopDefault(import('../pages/home/account/soccerrate.vue' /* webpackChunkName: "pages/home/account/soccerrate" */))
const _02243c86 = () => interopDefault(import('../pages/home/account/soccerratelimit.vue' /* webpackChunkName: "pages/home/account/soccerratelimit" */))
const _7d9c3e5a = () => interopDefault(import('../pages/home/account/Users.vue' /* webpackChunkName: "pages/home/account/Users" */))
const _f7ff45c4 = () => interopDefault(import('../pages/home/account/users/_id.vue' /* webpackChunkName: "pages/home/account/users/_id" */))
const _4c24cf60 = () => interopDefault(import('../pages/home/basketfixture.vue' /* webpackChunkName: "pages/home/basketfixture" */))
const _0b7b41e2 = () => interopDefault(import('../pages/home/basketinplay.vue' /* webpackChunkName: "pages/home/basketinplay" */))
const _61b18666 = () => interopDefault(import('../pages/home/soccerfixture.vue' /* webpackChunkName: "pages/home/soccerfixture" */))
const _346c99c5 = () => interopDefault(import('../pages/home/soccerinplay.vue' /* webpackChunkName: "pages/home/soccerinplay" */))
const _1e71581a = () => interopDefault(import('../pages/resetpass.vue' /* webpackChunkName: "pages/resetpass" */))
const _d63e8196 = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _4df56765 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _52fc60c8,
    name: "home",
    children: [{
      path: "account",
      component: _2b86d88c,
      children: [{
        path: "",
        component: _0455e6bd,
        name: "home-account"
      }, {
        path: "basketinplaymarkets",
        component: _f441f53a,
        name: "home-account-basketinplaymarkets"
      }, {
        path: "basketliverate",
        component: _38e83e37,
        name: "home-account-basketliverate"
      }, {
        path: "basketmarkets",
        component: _6a73429c,
        name: "home-account-basketmarkets"
      }, {
        path: "basketrate",
        component: _d809ca6a,
        name: "home-account-basketrate"
      }, {
        path: "basketratelimit",
        component: _718b6880,
        name: "home-account-basketratelimit"
      }, {
        path: "boss",
        component: _eeb9565c,
        name: "home-account-boss"
      }, {
        path: "branch",
        component: _a5b40572,
        name: "home-account-branch"
      }, {
        path: "codelist",
        component: _3c66cbf0,
        name: "home-account-codelist"
      }, {
        path: "creditlog",
        component: _4a313196,
        name: "home-account-creditlog"
      }, {
        path: "detailsaccount",
        component: _c6899060,
        name: "home-account-detailsaccount"
      }, {
        path: "detailscomission",
        component: _9aa12dfa,
        name: "home-account-detailscomission"
      }, {
        path: "gamelog",
        component: _42f06186,
        name: "home-account-gamelog"
      }, {
        path: "generalset",
        component: _ab5bf0c2,
        name: "home-account-generalset"
      }, {
        path: "info",
        component: _147df593,
        name: "home-account-info"
      }, {
        path: "loginlog",
        component: _167e2320,
        name: "home-account-loginlog"
      }, {
        path: "nextgoals",
        component: _05d6a0d0,
        name: "home-account-nextgoals"
      }, {
        path: "paycupons",
        component: _fa0ef6ee,
        name: "home-account-paycupons"
      }, {
        path: "profile",
        component: _3fef3b54,
        name: "home-account-profile"
      }, {
        path: "register",
        component: _11db4e88,
        name: "home-account-register"
      }, {
        path: "setlimit",
        component: _78259d04,
        name: "home-account-setlimit"
      }, {
        path: "settime",
        component: _2c3e0cda,
        name: "home-account-settime"
      }, {
        path: "singelbets",
        component: _41ea9c9d,
        name: "home-account-singelbets"
      }, {
        path: "soccerinplaymarkets",
        component: _3eb89820,
        name: "home-account-soccerinplaymarkets"
      }, {
        path: "soccerliverate",
        component: _2a39ad4c,
        name: "home-account-soccerliverate"
      }, {
        path: "soccermarkets",
        component: _5face719,
        name: "home-account-soccermarkets"
      }, {
        path: "soccerrate",
        component: _54170f6e,
        name: "home-account-soccerrate"
      }, {
        path: "soccerratelimit",
        component: _02243c86,
        name: "home-account-soccerratelimit"
      }, {
        path: "Users",
        component: _7d9c3e5a,
        name: "home-account-Users"
      }, {
        path: "users/:id?",
        component: _f7ff45c4,
        name: "home-account-users-id"
      }]
    }, {
      path: "basketfixture",
      component: _4c24cf60,
      name: "home-basketfixture"
    }, {
      path: "basketinplay",
      component: _0b7b41e2,
      name: "home-basketinplay"
    }, {
      path: "soccerfixture",
      component: _61b18666,
      name: "home-soccerfixture"
    }, {
      path: "soccerinplay",
      component: _346c99c5,
      name: "home-soccerinplay"
    }]
  }, {
    path: "/resetpass",
    component: _1e71581a,
    name: "resetpass"
  }, {
    path: "/welcome",
    component: _d63e8196,
    name: "welcome"
  }, {
    path: "/",
    component: _4df56765,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
