import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from 'views/search'
import Rank from 'views/rank'
import Recommend from 'views/recommend'
import Singer from 'views/singer'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/recommend'
  },
  {
    path:'/recommend',
    component: Recommend
  },
  {
    path:'/singer',
    component: Singer
  },
  {
    path:'/rank',
    component: Rank
  },
  {
    path:'/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
