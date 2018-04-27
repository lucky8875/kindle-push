import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import UserSetting from '@/pages/index/pages/UserSetting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'profile',
          component: UserSetting
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
