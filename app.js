//Section 1 - Anonymous & First Class Functions
function logGreeting(fn){
  fn();
}

//assiging anonymous function to a variable
var greetMe = function(){
  console.log('Hello Tony');
}

//passing a function into a function
logGreeting(greetMe);

//first class functions, notice the function inside a
//method call
logGreeting(function(){
  console.log('Hello Tony');
})

//Section 2 - Modules & Exporting

//module, does not have access to local vars and functions
//self contained
// var greet = require('./greet.js');
// //once the module has been exported, we can use it
// greet();

var greet = require('./greet');
greet.english();
greet.spanish();
