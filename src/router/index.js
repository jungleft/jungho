import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gallary from '../components/Gallary.vue'

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
    path: '/thav_sketch',
    name: 'sketch',
    
    component: () => import(/* webpackChunkName: "about" */ '../components/thav_sketch.vue')
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
    path: '/gallary',
    name: 'gallary',
    component: Gallary
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/contact.vue')
  },
  {
    path: '/scano',
    name: 'scano',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/scano.vue')
  },
  {
    path: '/scan_photo',
    name: 'photo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/scan_photo.vue')
  },
  {
    path: '/scan_match',
    name: 'match',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/scan_match.vue')
  },
  {
    path: '/scan_bag',
    name: 'bag',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/scan_bag.vue')
  },
  {
    path: '/scan_card',
    name: 'card',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/scan_card.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/shop.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/cart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
