const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes/routes-engine');
const port = 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + "/public"));

app.get('/', routes.index);
app.get('/cms', routes.cms);


app.listen( port, () => {
	console.log('listening to port' + port)
});