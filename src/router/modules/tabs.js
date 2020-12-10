// require('login/index').default   // 同步的方式
// () => import('login/index')      // 异步的方式

// basic components
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

export default [
  {
    path: '/home',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/tabs/home/home'),
        name: 'home',
        meta: { title: '首页' },
      }
    ]
  },
  {
    path: '/category',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/tabs/category/category'),
        name: 'category',
        meta: { title: '分类' },
      },
    ]
  },
  {
    path: '/news',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/tabs/news/news'),
        name: 'news',
        meta: { title: '发现' },
      },
    ]
  },
  {
    path: '/cart',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/tabs/cart/cart'),
        name: 'cart',
        meta: { title: '购物袋' },
      },
    ]
  },
  {
    path: '/mine',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/tabs/mine/mine'),
        name: 'mine',
        meta: { title: '我的' },
      },
    ]
  }
]