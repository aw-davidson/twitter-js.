const routes = require('./routes');
const express = require( 'express' );
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
var socketio = require('socket.io');
const app = express(); // creates an instance of an express application
const PORT = 3000;

var server = app.listen(3000);
var io = socketio.listen(server);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes(io));

app.use(express.static('views'));

app.use(express.static('public'));

// app.listen(PORT, () => {
//   console.log(`listening on ${PORT}`);
// })
