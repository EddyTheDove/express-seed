
import express from 'express';
import path from 'path';
import webRoutes from './routes/web';
import apiRoutes from './routes/api';

let app = express();

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


app.use('/', express.static(__dirname + '/public'))
app.use(webRoutes)
app.use(apiRoutes)

app.listen('3000');
