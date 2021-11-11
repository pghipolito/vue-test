import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/typeCreate')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/typeList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/typeEdit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router