var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

//Error first callback: A callback that contains an error object in the first
//parameter. The error object will be null if there is no error. Otherwise it
//will contain an object defining the error
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
  function(err, data){
    console.log(data);
  }
);

//if you include 'utf8' as a second parameter it will be a string


console.log('Done!');
