import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import UserSetting from '@/pages/index/pages/UserSetting'
import IndexUpload from '@/pages/index/pages/IndexUpload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'upload',
          component: IndexUpload
        },
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
