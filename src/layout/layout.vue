<template>
  <div id="layout">
    <el-container>
      <el-header>
        <TopNav/>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <LeftMenu/>
        </el-aside>
        <el-main>
          <div class="tag-box">
            <keepAliveTags></keepAliveTags>
          </div>
          <div class="content-box">
            主体
              <keep-alive :include="$store.state.route.keepALiveRoutes.map((item)=>{
                return item.name
              })">
                <router-view/>
              </keep-alive>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import menu from './menu'
import TopNav from './topNav'
import keepAliveTags from './keepAliveTags'
import { mapState } from 'vuex'

export default {
  name: 'layout',
  data() {
    return {
      reload: true
    }
  },
  components: {
    LeftMenu: menu,
    TopNav,
    keepAliveTags
  },
  computed: {
    ...mapState('route', [
      'keepALiveRoutes'
    ])
  },
  watch: {
    keepALiveRoutes() {
      if (!this.keepALiveRoutes) {
        this.reload = false
        this.$nextTick(() => {
          this.reload = true
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #layout {
    width: 100%;
    height: 100%;
  }

  ::v-deep .el-tag {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }

  .el-container {
    height: 100%;
    overflow: auto;
  }

  .el-header {
    height: 83px;
    background: #FFFFFF;
    box-shadow: none;
  }

  .el-main {
    background-color: rgba(245, 245, 245, 1);
    overflow: hidden;
    box-sizing: border-box;
    height: 100%;
    /*padding: 24px;*/
    display: flex;
    flex-direction: column;

    .tag-box {
      height: 40px;
      width: 100%;
      background: #fff;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      padding: 0 24px;
      box-sizing: border-box;
    }

    .content-box {
      flex: 1 1 auto;
      width: 100%;
      background: #fff;
    }

    .router_view_home {
      overflow: auto;

    }

    ::v-deep .el-scrollbar__view {
      padding: 20px;
    }

    ::v-deep .el-scrollbar__bar.is-vertical {
      right: 10px;
    }

  }

  .el-header {
    border-bottom: 1px solid #BFBFBF;
    padding-bottom: 3px;
  }

</style>
