var path = require('path')
var express = require('express')
var router = express.Router()
var http = require('http')

// Importing routes
var home = require('./routes/home')

// Variable init
app = express()
port = process.env.port || 8080
var server = app.listen(port, () => console.log("Server is running on port " + port));
var io = require('socket.io').listen(server)


// App setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', home);

