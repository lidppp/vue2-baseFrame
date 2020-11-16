import testRouterList from './test.routerList'
import router from '@/router'
const state = {
  routerList: [], // routerList 注册路由表的数组
  keepALiveRoutes: [], // keep-alive需要保持的路由信息
  routerSelectIndex: 0,
  keepAliveName: ''
}

function formatList (list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].component) {
      list[i].component = require('@/' + list[i].component).default
    }
    if (list[i].children) {
      formatList(list[i].children)
    }
  }
  return list
}

function isInArray(arr, item) {
  let flag = false
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].name === item.name) {
      flag = true
      break
    }
  }
  return flag
}

const mutations = {
  addRouter(state, list) {
    state.routerList = list
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        formatList(list)
        router.addRoutes(list)
      }, 500)
    })
  },
  changeKeepAliveName(state, name) {
    state.keepAliveName = name
  },
  addKeepALiveRoutes(state, routerObj) {
    // 如果不在数组中则添加
    !isInArray(state.keepALiveRoutes, routerObj) && state.keepALiveRoutes.push(routerObj)
  },
  removeKeepALiveRoutes(state, routerObj) {
    state.keepALiveRoutes.splice(state.keepALiveRoutes.indexOf(routerObj), 1)
  },
  clearKeepALiveRoutes(state, routerObj) {
    state.keepALiveRoutes.length = 0
  },
  changeRouterSelectIndex(state, index) {
    state.routerSelectIndex = index
  }
}

const actions = {
  getRouter(ctx) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ctx.commit('addRouter', testRouterList)
        resolve()
      }, 500)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
