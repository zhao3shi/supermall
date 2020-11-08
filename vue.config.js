module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    },
    devServer: { // 环境配置
      host: '0.0.0.0',
      public: '202.199.13.159:8080',
      port: '8080',
      https: false,
      disableHostCheck: true,
      open: false // 配置自动启动浏览器
    },
    
  
  }
  
  