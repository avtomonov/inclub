import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f6f91da = () => interopDefault(import('..\\pages\\categories.vue' /* webpackChunkName: "pages/categories" */))
const _6522f98f = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages/chat" */))
const _e29a1f1a = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _e5b58b16 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _5d2e454c = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _9dac12aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories",
    component: _0f6f91da,
    name: "categories"
  }, {
    path: "/chat",
    component: _6522f98f,
    name: "chat"
  }, {
    path: "/inspire",
    component: _e29a1f1a,
    name: "inspire"
  }, {
    path: "/map",
    component: _e5b58b16,
    name: "map"
  }, {
    path: "/settings",
    component: _5d2e454c,
    name: "settings"
  }, {
    path: "/",
    component: _9dac12aa,
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
