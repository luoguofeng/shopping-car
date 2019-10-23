module.exports = {
  publicPath: '', // 暴露静态资源
  devServer: {
    host: 'localhost',
    port: 9090,
    proxy: {
      // 代理服务器
      '/mock': {
        target: 'http://localhost:9090',
        ws: false,
        changeOrigin: false // 将主机头的原点改为目标的URL
      }
    }
  }
}
