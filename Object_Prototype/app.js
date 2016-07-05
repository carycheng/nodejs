//Creating a person object literal
var person = {
  firstname: '',
  lastname: '',
  greet: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

//creating a new object called John, Object.create(person) says that we are
//using person as our prototype.
var john = Object.create(person);
//here once it is our protoype for our initial empty object we can go through and
//change the values
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

//Will go down the chain and find the greet function from the person object.
//The person object is chained to the john object and the jane object
console.log(john.greet());
console.log(jane.greet());

//Prototype Chain
//John -> Person{} -> firstname, lastname, greet()
//We overwrote the firstname and lastname properties of the prototype
