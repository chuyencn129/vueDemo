import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/DetailView.vue')
  },
  {
    path: '/Add',
    name: 'add',
    component: () => import('../views/add/AddView.vue')
  },
  {
    path: '/Edit/:id',
    name: 'edit',
    component: () => import('../views/edit/EditView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
