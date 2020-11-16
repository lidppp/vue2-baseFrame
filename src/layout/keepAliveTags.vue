<template>
  <div>
    <template v-for="(item,index) in routerKeepAliveList">
      <el-tag @close="tagClose(item,index)"  closable :key="index" :type="keepAliveName===item.name?'':'info'">
        <router-link :to="{name:item.name}">
          {{item.meta.label}}
        </router-link>
      </el-tag>
    </template>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('route', {
      routerKeepAliveList: state => state.keepALiveRoutes,
      keepAliveName: state => state.keepAliveName
    })
  },
  methods: {
    ...mapMutations('route', [
      'changeKeepAliveName',
      'removeKeepALiveRoutes'
    ]),
    tagClose(obj, index) {
      if (this.routerKeepAliveList.length === 1) {
        return this.$message('不可以关闭全部的标签页')
      }
      if (this.$route.name === obj.name) {
        const jumpIndex = index - 1 < 0 ? index + 1 : index - 1
        this.$router.push({ name: this.routerKeepAliveList[jumpIndex].name })
      }
      this.removeKeepALiveRoutes(obj)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
