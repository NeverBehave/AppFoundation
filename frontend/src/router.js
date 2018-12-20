import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '@/layouts/mainLayout'
import InitLayout from '@/layouts/initLayout'

import HomeRouter from '@/modules/home/router'
import AuthRouter from '@/modules/auth/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '',
    component: InitLayout,
    children: [
      ...HomeRouter,
      ...AuthRouter,
      // Trival
      {
        path: '/404',
        name: 'WIP',
        component: () => import(/* webpackChunkName: "WIP" */ '@/views/WIP')
      }
    ]
  }, {
    path: '',
    component: MainLayout,
    children: [
    ]
  },
  { // Fallback
    path: '',
    component: InitLayout,
    children: [{
      path: '*',
      component: () => import(/* webpackChunkName: "WIP" */ '@/views/WIP')
    }]
  }
  ]
})
