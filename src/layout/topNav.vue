<template>
  <div class="top-nav-box">
    <el-menu :default-active="routerSelectIndex+''" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="(item,index) in routerList">
        <el-menu-item :key="index" :index="index+''">{{item.meta.label}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'topNav',
  data() {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    ...mapState('route', {
      routerList: store => store.routerList,
      routerSelectIndex: store => store.routerSelectIndex
    })
  },
  methods: {
    ...mapMutations('route', [
      'changeRouterSelectIndex',
      'clearKeepALiveRoutes'
    ]),
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.changeRouterSelectIndex(key)
      this.clearKeepALiveRoutes()
      this.$router.push({ name: this.routerList[key].children[0].name })
    }
  }
}
</script>

<style scoped>

  .top-nav-box {
    height: 100%;
  }

  .el-menu.el-menu--horizontal {
    border-bottom-width: 0;
  }

  .el-menu, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
    background: transparent;
  }

</style>
