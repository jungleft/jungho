import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/project',
    name: 'project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/project.vue')
  },
  {
    path: '/fluid',
    name: 'fluid',
    
    component: () => import(/* webpackChunkName: "about" */ '../components/fluid_lines.vue')
  },
  {
    path: '/calen',
    name: 'calen',

    component: () => import(/* webpackChunkName: "about" */ '../components/calen_draw.vue')
  },
  {
    path: '/animation',
    name: 'animation',
    
    component: () => import(/* webpackChunkName: "about" */ '../components/animation.vue')
  },
  {
    path: '/drawing',
    name: 'drawing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/drawing.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
