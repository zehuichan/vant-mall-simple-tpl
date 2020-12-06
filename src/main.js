// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '@vant/touch-emulator'

import Vue from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/less/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.use(Vant)

import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
