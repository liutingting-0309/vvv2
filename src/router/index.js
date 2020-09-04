import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from '../pages/Mine/mine'
import Cinema from '../pages/Cinema/cinema'
import Movie from '../pages/Movie/movie'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/movie' },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/movie',
      component: Movie
    }
  ]
})

export default router
