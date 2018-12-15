module.exports = function(app){

    app.get('/add_new', (req, res)=>{
        res.render('admin/form_add_news')
    })
}
