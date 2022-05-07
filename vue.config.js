const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  //关闭eslint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn'
        //target: 'http://139.198.152.148:8200/'
        //target: 'http://39.98.123.211',
        //pathRewrite: { '^/api': '' },
      }
    }
  }
})
