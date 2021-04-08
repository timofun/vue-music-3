const path = require('path')
const registerRouter = require('./backend/router')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader').options({
      patterns: [
        path.resolve(__dirname, './src/assets/less/variable.less'),
        path.resolve(__dirname, './src/assets/less/mixin.less')
      ]
    })
}
module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 9999,
    before (app) {
      registerRouter(app)
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/'
}
