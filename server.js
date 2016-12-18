
import express from 'express';
import path from 'path';
import webRouter from './routes/web';
import apiRouter from './routes/api';

const app = express();

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


app.use('/', express.static(__dirname + '/public'))
app.use(webRouter)
app.use(apiRouter)

app.listen('3000');
