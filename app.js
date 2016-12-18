var express = require('express'),
    path = require('path'),
    webRouter = require('./routes/web'),
    apiRouter = require('./routes/api'),
    app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


app.use('/', express.static(__dirname + '/public'))
app.use(webRouter)
app.use(apiRouter)

app.listen('3000');
