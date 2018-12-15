
const app =require('./config/server')

// config routes
// const routeNews = require('./app/routes/news')(app)
// const routeHome = require('./app/routes/home')(app)
// const routeFormAddNews = require('./app/routes/form_add_news')(app)


//server call
const port = 3000
app.listen(port, () => { console.log('Listening port...')})