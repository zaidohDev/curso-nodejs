module.exports = function(app){

    app.get('/news', (req, res)=>{

        let con = app.config.dbConnection()

        con.query('select * from news', function(error, result){
            res.render('news/news', {news: result})
        })
    })
}

