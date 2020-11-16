import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {path: '/',component: () => import('@/page/login.vue')},
    {path: '/login',component: () => import('@/page/login.vue')},
    {path: '/404',component: () => import('@/page/404.vue')},
    {
      path: '/home',
      component: () => import('@/page/home.vue'),
      children: [
        {path: 'menu1',component: () => import('@/page/menu/meun1.vue')},
        {path: 'menu2',component: () => import('@/page/menu/menu2.vue')}
      ]
    }
  ]
})
