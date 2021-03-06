import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Test from './views/test.vue'
import AddItem from './views/AddItem.vue'
import ShowItem from './views/ShowItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/manage',
      name: 'home',
      component: Home,
      children: [{
        path: '/additem',
        component: AddItem,
        meta: ['内容管理','添加条目']
      },
      {
        path: '/showitem',
        component: ShowItem,
        meta: ['内容管理','查询/修改']
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },

  ]
})
