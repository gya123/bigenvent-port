// 引入express
const express = require('express')
// 创建服务实例
const app = express()
// 开启服务，设置端口
app.listen(8001, () => {
    console.log( '服务开启了' );
})
// 配置路由y