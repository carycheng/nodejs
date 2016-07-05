var http = require('http');
var fs = require('fs');

//generic api call to the server taking any url
http.createServer(function(req, res){

  if(req.url === '/'){
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  }

  else if(req.url === '/json'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
  }
 else{
   //if url does not exist, 404 error out
   res.writeHead(404);
   res.end();
 }

}).listen(1337, '127.0.0.1');
