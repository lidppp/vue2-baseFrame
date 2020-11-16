import Vue from 'vue'

/* 格式化时间 */
Vue.filter('formatTime', function(originVal, tag = '-') {
  const time = new Date(originVal)
  const y = time.getFullYear()
  const m = (time.getMonth() + 1 + '').padStart(2, '0')
  const d = (time.getDate() + '').padStart(2, '0')
  const hh = (time.getHours() + '').padStart(2, '0')
  const mm = (time.getMinutes() + '').padStart(2, '0')
  const ss = (time.getSeconds() + '').padStart(2, '0')

  // 过滤数据一定要流出数据
  return `${y}${tag}${m}${tag}${d} ${hh}:${mm}:${ss}`
})

/* 格式化时间（not ss） */
Vue.filter('formatTime2', function(originVal, tag = '.') {
  const time = new Date(originVal)
  const y = time.getFullYear()
  const m = (time.getMonth() + 1 + '').padStart(2, '0')
  const d = (time.getDate() + '').padStart(2, '0')
  const hh = (time.getHours() + '').padStart(2, '0')
  const mm = (time.getMinutes() + '').padStart(2, '0')

  // 过滤数据一定要流出数据
  return `${y}${tag}${m}${tag}${d} ${hh}:${mm}`
})
