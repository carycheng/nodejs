var util = require('util');
var EventEmitter = require('events');


function Person(){
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function(){
  console.log(`Hello ${this.firstname} ${this.lastname}`);
}

//function constructor
function Policeman(){
  //Without this line, the console would log undefined for name because
  //Policeman now have a firstname and lastname property but we did not
  //explicitly assign it any values.

  //With this line, we give the property values of Person to the Policeman object
  Person.call(this);
  this.badgerunner = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
