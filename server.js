
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import webRoutes from './routes/web'
import apiRoutes from './routes/api'

let app = express();

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))

//Use morgan to log requests to the console
app.use(morgan('dev'))

//bodyParser will let us get data from POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/', express.static(__dirname + '/public'))
app.use(webRoutes)
app.use('/api', apiRoutes) //apply 'api' as the default prefix

app.listen('3001');
