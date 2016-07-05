var http = require('http');
var fs = require('fs');

//creating object and giving it a callback function
http.createServer(function(req, res){

  //MIME Type
  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  var message = 'Hello World...';
  html = html.replace('{Message}', message);
  res.end(html);

}).listen(1337, '127.0.0.1'); //ip address for localhost
