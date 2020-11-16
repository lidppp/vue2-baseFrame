import Vue from 'vue'
import Vuex from 'vuex'
import route from './routerList'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    route
  }
})
