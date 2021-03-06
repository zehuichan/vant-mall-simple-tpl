import {createRouter, createWebHashHistory} from 'vue-router'

// basic components no-unused-vars
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'


const routes = [
  {path: '/', redirect: '/home'},
  {
    path: '/',
    component: BasicLayout,
    children: [
      // tabs
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/tabs/home/home'),
        meta: {title: '首页'}
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/views/tabs/category/category'),
        meta: {title: '分类'}
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('@/views/tabs/news/news'),
        meta: {title: '分类'}
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/tabs/cart/cart'),
        meta: {title: '分类'}
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/tabs/mine/mine'),
        meta: {title: '我的'}
      },
    ]
  },
  // h5活动
  {
    path: '/h5',
    component: BlankLayout,
    children: [
      {
        path: '/h5/egg',
        name: 'egg',
        component: () => import('@/views/tabs/category/tpl/egg'),
        meta: {title: '砸金蛋'}
      },
      {
        path: '/h5/grid',
        name: 'grid',
        component: () => import('@/views/tabs/category/tpl/grid'),
        meta: {title: '九宫格'}
      },
      {
        path: '/h5/wheel',
        name: 'wheel',
        component: () => import('@/views/tabs/category/tpl/wheel'),
        meta: {title: '大转盘'}
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
