var express = require('express');
var app = express();
var request = require('request');

var port = Number(process.env.PORT || 5000);

app.get('/', function(req, res){
	request.get('https://raw.github.com/auchenberg/dotdev/master/install.sh').pipe(res);
});

app.listen(port);