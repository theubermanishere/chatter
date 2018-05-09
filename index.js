var express = require('express')
var io = require('socket.io')
var router = express.Router()
var home = require('./routes/home')
var path = require('path')

port = process.env.port || 8080

app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', home);

app.listen(port, () => console.log("Server is running on port " + port));
