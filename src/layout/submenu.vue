<template>
  <div>
    <template v-for="item in randerList">
      <el-menu-item v-if="!item.children" :key="item.name" :index="item.name" :route="{name:item.name}">
        <i class="el-icon-menu"></i>
        <template #title>
          {{item.meta.label}}
        </template>
      </el-menu-item>

      <el-submenu v-if="item.children" :key="item.name" :index="item.path">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <template v-if="!submenuTitleShow"> {{item.meta.label}}</template>
        </template>
        <submenu :randerList="item.children"></submenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'submenu',
  props: ['randerList', 'submenuTitleShow'],
  created() {
    console.log(this.randerList)
  }
}
</script>

<style scoped lang="scss">

</style>
