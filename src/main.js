// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '@vant/touch-emulator'

import {createApp} from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/less/index.less'

// global components
import VComponents from '@/constants/vcomponents'

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

import * as filters from './filters'

const $filters = {}

// register global utility filters.
Object.keys(filters).forEach((key) => {
  $filters[key] = filters[key]
})

const app = createApp(App)

app.config.globalProperties.$filters = $filters

console.log('app', app)
console.log('vue', `v${app.version}`)
console.log('vant', `v${Vant.version}`)

app.use(Vant)
app.use(VComponents)
app.use(store)
app.use(router)
app.mount('#app')
