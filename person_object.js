var person = {
  firstname: 'John',
  lastname: 'Doe',
  //functions are first class variables
  greet: function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};

person.greet();

//does the same thing
console.log(person.firstname);
console.log(person['firstname']);
