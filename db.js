function db(sql,param = null) {
    // 引入sql模块
    const mysql = require('mysql')
    // 创建连结对象，配置连结属性
    const conn = mysql.createConnection({
        // 域名
        host: localhost,
        // 端口号
        port: 3306,
        // 用户名
        user: 'root',
        password: 'gya123456',
        database:'heros'
    })

    // 异步操作要放在promise实例中，并把promise实例作为封装函数的返回值
    return new Promise((resolve, reject) => {
        // 连结数据库
        conn.connect()
        // 操作数据库
        conn.query(sql, param, (err, result) => {
            // 如果操作数据库报错，说明数据库操作不成功，走reject逻辑
            // 如果每报错，说明数据库查询成功，走resolve逻辑,把查询结果传递出去
            err?reject(err):resolve(result)
        })
        // 关闭数据库连结
        conn.end()
    })
}
   
//    导出模块 中封装好的db函数
module.exports = db;
    