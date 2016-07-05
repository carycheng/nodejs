function Person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function(){
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Doe');
//searches up the protoype chain and calls the greet function
//on the john object

john.greet();
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
