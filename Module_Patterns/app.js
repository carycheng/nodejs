//Pattern 1
var greet = require('./greet1');
greet();

//Pattern 2
//greet is a method on the exports object
//require returns a module.export object, here we are saying we want the property
//on that object
var greet2 = require('./greet2').greet;
greet2();

//Pattern 3
var greet3 = require('./greet3');
greet3.greet();

//Since your created the object here with your constructor, this will no longer
//be referencing the same object over and over. Instead this will create a new
//object
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();


//Pattern 4: Revealing Module Pattern
//Exposing on the properties and methods you want via an returned object
//Pros: A very common and clean way to structure and protect code within modules.
var greet5 = require('./greet5').greet;
greet5();

//*Important: if you return an object from require it will be cached. Any call to the require
//will get you back the same object everywhere because it has been cached.
//Pros: Part of why node.js has superior speed, no need to reload everytime
//require has been called
