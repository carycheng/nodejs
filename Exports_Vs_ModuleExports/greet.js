//Exports vs Module.exports? What's the difference since exports is the
//short hand for module.exports

exports = function(){
  console.log('Hello');
};

//At this moment they are pointing at the same memory address
console.log(exports); //[Function]
console.log(module.exports); //{}

//One is now a function, however, the second is still an empty object,
//even though they are pointing to the same object at the memory address

//*Important: This is due to the above live where we are setting exports. This
//javascript quirk, where, in use of the '=' we are actually setting it to
//another object in a different memory location instead of the same object with
//the same location

//That's why greet() in app.js will break, module.exports is an empty object
