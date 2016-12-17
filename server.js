var express = require('express'),
    path = require('path'),
    webRouter = require('./routes/web'),
    apiRouter = require('./routes/api'),
    sassMiddleware = require('node-sass-middleware'),
    app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


app.use(sassMiddleware({
    src: path.join(__dirname, 'assets', 'sass'),
    dest: path.join(__dirname, 'public', 'assets', 'css'),
    debug: true,
    outputStyle: 'compressed'
}))
app.use('/', express.static(__dirname + '/public'))
app.use(webRouter)
app.use(apiRouter)

app.listen('3000');
