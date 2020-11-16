<template>
  <div id="menu-box">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse" :router="true">
      <submenu :submenu-title-show="isCollapse" :randerList="routerList[routerSelectIndex].children"></submenu>
    </el-menu>

    <div class="s-box" @click="isCollapse=!isCollapse">{{isCollapse ? "&gt;" : "&lt;"}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import submenu from './submenu'

export default {
  name: 'left-menu',
  components: {
    submenu
  },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState('route', {
      routerList: state => state.routerList,
      routerSelectIndex: state => state.routerSelectIndex
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu {
    border-right-width: 0;
  }

  #menu-box {
    padding-bottom: 40px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
  }

  .s-box {
    position: absolute;
    bottom: 0;
    height: 40px;
    text-align: center;
    left: 0;
    right: 0;
    line-height: 40px;
    user-select: none;
    cursor: pointer;
    font-family: "黑体";
  }

  /deep/ .el-menu--collapse .el-submenu__icon-arrow {
    display: none;
  }
</style>
