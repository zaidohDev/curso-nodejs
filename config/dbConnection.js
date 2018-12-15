const mysql = require('mysql')

let connMysql = function(){
    console.log('the connection to the database was initialized')
    return mysql.createConnection({
        host: 'localhost',
        user: 'zaidoh',
        password: '123456',
        database: 'news'
     })
}
        
module.exports = function(){
    return connMysql
}