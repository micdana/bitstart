var express = require('express');
var fs = require('fs');

var data = fs.reafFileSync("webindex.html", "utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response){
 response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(post, function() {
  console.log("listening on " + port);
});
