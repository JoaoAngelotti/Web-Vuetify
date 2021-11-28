import Vue from 'vue'
import VueRouter from 'vue-router'
import MyCard from '@/components/MyCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/About.vue')
  },
  {
    path: '/pesquisar',
    name: 'Pesquisar',
    component: () => import('../views/Pesquisar.vue')
  },
  {
    path: '/curte',
    name: 'Curte',
    component: () => import('../views/Curte.vue')
  },
  {
    path: '/:cardId',
    name: 'MyCard',
    component: MyCard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
