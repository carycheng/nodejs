var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('<html><head></head><body><h1>Hello</h1></body></html>');
});

app.get('/api', function(req, res){
  res.json({
    firstname: 'John',
    lastname: 'Doe'
  });
});

app.get('/person/:id', function(req, res){
  res.send('<html><head></head><body><h1>Hello ' + req.params.id + '</h1></body></html>');
});

app.listen(port);
