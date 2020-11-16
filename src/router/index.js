import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@views/login/login'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (from.name === 'login') {
    // 过掉 这是判断token的
  } else if (store.state.route.routerList.length === 0) {
    await store.dispatch('route/getRouter')
    next({ ...to, replace: true })
  }
  if (to.name) {
    store.commit('route/addKeepALiveRoutes', to)
    store.commit('route/changeKeepAliveName', to.name)
  }
  next()
})

export default router
