import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需导入 ElementUI
import '@plugins/element'
// 导入全局过滤器
import '@utils/filters'
// 导入字体图标
// import '@assets/fonts/iconfont.css'
// 导入重置样式表
import '@assets/styles/u-reset.css'
// import mixin from './utils/mixin-removeKeepAlive'

Vue.config.productionTip = false
// Vue.use(mixin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
