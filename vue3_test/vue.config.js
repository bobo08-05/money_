module.exports = {
 lintOnSave: false,//关闭语法检查
 //开启代理服务器(方法一)
 //  devServer: {
 //   proxy: 'http://localhost:5000'
 // }
 //打开发请求的文件
 // 你本地有后端服务吗有啊
 // devServer: {
 //  proxy: {
 //   '/api': {
 //    target: 'http://localhost:5000',
 //    ws: true,
 //    changeOrigin: true,
 //    pathRewrite:{'^/api':''}
 //   },
 //   '/demo1': {
 //    target: 'http://localhost:5001',
 //    changeOrigin: true,
 //    pathRewrite:{'^/demo1':''}
 //   }
 //  }
 // }
}