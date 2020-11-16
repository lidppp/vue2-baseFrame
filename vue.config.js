// vue.config.js
const path = require('path')
// 加载路径
const resolve = (dir) => path.join(__dirname, dir)
// 开发环境
const IS_DEV = process.env.VUE_APP_ENV === 'DEV'
// 生产环境
const IS_PROD = process.env.VUE_APP_ENV === 'PROD'

module.exports = {
  // 公共路径
  publicPath: '/',
  // 'dist', 生产环境构建文件的目录
  outputDir: process.env.VUE_APP_OUTPUT,
  // 相对于outputDir的静态资源(js、css、img、fonts)目录
  assetsDir: './static',
  // 相对于打包路径index.html的路径
  indexPath: 'index.html',
  // dist 目录的静态资源的文件名多会追加上 hash 值
  filenameHashing: true,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: IS_PROD ? false : true,
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。
  // 允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@plugins', resolve('src/plugins'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
  },
  css: {
    // 开启 CSS source maps
    sourceMap: IS_PROD ? false : true,
    loaderOptions: {
      sass: {
        prependData: `@import "~@assets/styles/global.scss";`
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    // 指定要监听请求的端口号
    port: 8086,
    // 告诉 dev-server 在 server 启动后打开浏览器
    open: true
  }
}
