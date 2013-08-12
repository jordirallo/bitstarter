var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs')

app.get('/', function(request, response) {
  buff = fs.readFileSync('index.html');
  response.send(buff.toString("utf-8", 0, buff.lenght));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
