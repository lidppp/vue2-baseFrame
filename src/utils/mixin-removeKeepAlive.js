
const mixin = {
  beforeRouteLeave(to, from, next) {
    console.log(this.$store.state.route.keepALiveRoutes.length)
    next()
  }
}
export default {
  install(Vue) {
    Vue.mixin(mixin)
  }
}
