var greet = function(){
  console.log('Greet.js Output');
};

//making this for use outside of the module
module.exports = greet;

//OR

// module.exports = function(){
//   console.log('One Liner');
// };

//Module: A reuseable block of code whose existence does not accidentally impact
//other code

//Modules
//1. require is a function that you pass a 'path' to
//2. module.exports is what the require function returns
//3. this works because your code is actually wrapped in a function that is given
//given these things as function paramaters
//ex: fn(module.exports, require, module, filename, dirname)
//the code is the body of the function, but the above parameters are all passed to
//V8
