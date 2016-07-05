//Require still returns an empty object to module.export in the beginning.
//In this case we are adding a function called greet to our object.
module.exports.greet = function(){
  console.log('Hello World!');
};
