const http = require('http');

const server = http.createServer((req, res)=>{
    let category = req.url

    if (category == '/tecnologia') {
        res.end(`<!DOCTYPE html><html><body>Notícias sobre tecnologia</body></html>`)

    }else if(category == '/moda'){
        res.end(`<!DOCTYPE html><html><body>Notícias sobre moda</body></html>`)

    }else if(category == '/esporte'){
        res.end(`<!DOCTYPE html><html><body>Notícias sobre esporte</body></html>`)

    } else{
        res.end(`<!DOCTYPE html><html><body>Portal de notícias</body></html>`)
    }
    
})

server.listen(3000)