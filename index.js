var express = require('express')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path')

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://code.jquery.com/jquery-1.11.1.js http://localhost:3000");
    return next();
});

app.use(express.static('static'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

io.on('connection', function(socket){
	console.log("a user connected");
	socket.on('chat message', function(msg) {
		console.log('message: ' + msg);
	});
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});
