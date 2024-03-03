import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Milotic from '../views/Milotic.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/milotic",
      name: "milotic",
      component: Milotic
    }
  ]
})

export default router
