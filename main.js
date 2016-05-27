
var http = require('http');
var express = require('express');
var httpApp = express();
httpApp.use(express.static(__dirname ));
httpApp.get('/', function (req,res){
    res.sendFile(__dirname + '/' + 'signup.html');
});
var webserver = http.createServer(httpApp).listen(8085);
