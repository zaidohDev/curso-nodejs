const dbConnection = require('../../config/dbConnection')
module.exports = function(app){

    let con = dbConnection()

    app.get('/news', (req, res)=>{

        con.query('select * from news', function(error, result){
            res.render('news/news', {news: result})
        })
    })
}

