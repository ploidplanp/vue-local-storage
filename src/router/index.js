import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'
import Cat from '../view/Cat.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cats',
      component: Cat
    }
]
  
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
  