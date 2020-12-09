// require('login/index').default   // 同步的方式
// () => import('login/index')      // 异步的方式

import Vue from 'vue'
import VueRouter from 'vue-router'

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath).default
  modules.push(...value)
  return modules
}, [])

const routes = [
  {path: '/', redirect: 'home'},
  {path: '/403', component: () => import('@/views/error-page/403')},
  {path: '/404', component: () => import('@/views/error-page/404')},
  {path: '/500', component: () => import('@/views/error-page/500')},

  ...modules,

  {path: '*', redirect: '/404'}
]

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
