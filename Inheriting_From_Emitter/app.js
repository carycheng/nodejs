var EventEmitter = require('events');
var util = require('util');

//function constructor because of the 'new'
function Greetr(){
  //This solves the problem of giving EvenEmitter properties to all new objects
  //you create.
  EventEmitter.call(this);
  this.greeting = 'Hello World!';
}

//New objects created from Greetr, should get the properties of EventEmitter
util.inherits(Greetr, EventEmitter);

//Greeter object with function greet. This function can also emit because it
//inherited the emit function from EventEmitter in the line above.
Greetr.prototype.greet = function(data){
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

//new object created from Greeter will get the EventEmitter functions
var greeter1 = new Greetr();

greeter1.on('greet', function(data){
  console.log('Someone greeted!: ' +data);
});

//passing in the value of Tony into the greet function, however, the listener needs
//be able to take in a data parameter as well.
greeter1.greet('Tony');
