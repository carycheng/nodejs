'use strict';

var EventEmitter = require('events');

//got rid of using inheritance but created a class that inherits from EventEmitter
class Greetr extends EventEmitter{
  constructor(){
    super();
    this.greeting = 'Hello World';
  }
  greet(data){
    console.log(`${this.greetng}: ${data}`);
    this.emit('greet', data);
  }
}
