// require('login/index').default   // 同步的方式
// () => import('login/index')      // 异步的方式

import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = []

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
