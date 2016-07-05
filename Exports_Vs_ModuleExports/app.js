var greet = require('./greet');
var greet2 = require('./greet2');
greet2.greet();

//*Important: All in all use module.exports. Otherwise you have to be careful
//to make sure to not assign the exports but mutate an attribute like we see
//in greet2.js
