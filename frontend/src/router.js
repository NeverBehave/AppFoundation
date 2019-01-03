import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '@/layouts/mainLayout'
import InitLayout from '@/layouts/initLayout'

import HomeRouter from '@/modules/home/router'
import AuthRouter from '@/modules/auth/router'
import UserRouter from '@/modules/user/router'
import DashBoardRouter from '@/modules/dashboard/router'

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
      ...UserRouter,
      ...DashBoardRouter
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
