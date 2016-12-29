
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import webRoutes from './routes/web'
import apiRoutes from './routes/api'

let app = express();

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))

//bodyParser will let us get data from POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/', express.static(__dirname + '/public'))
app.use(webRoutes)
app.use(apiRoutes)

app.listen('3001');
