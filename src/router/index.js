import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'cart',
    component: () => import('@/pages/cart.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('@/pages/address.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
