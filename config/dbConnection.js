const mysql = require('mysql')

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'zaidoh',
        password: '123456',
        database: 'news'
     })
}
        