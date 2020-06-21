const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('component', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('api', resolve('src/api'))
      .set('common', resolve('src/common'))
  },
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    proxy: {
      "/api": {
        target: "https://c.y.qq.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        },
        headers: {
          "Referer": "https://c.y.qq.com/",
          "host": 'c.y.qq.com'
        }
      }
    }
  }
}
