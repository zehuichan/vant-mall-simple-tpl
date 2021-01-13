import {createRouter, createWebHashHistory} from 'vue-router'

// basic components no-unused-vars
import BasicLayout from '@/layouts/BasicLayout'


const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: BasicLayout,
    children: [
      // tabs
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/tabs/home/home'),
        meta: { title: '首页' }
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/views/tabs/category/category'),
        meta: { title: '分类' }
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('@/views/tabs/news/news'),
        meta: { title: '分类' }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/tabs/cart/cart'),
        meta: { title: '分类' }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/tabs/mine/mine'),
        meta: { title: '我的' }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
