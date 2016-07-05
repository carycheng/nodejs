exports.greet = function(){
  console.log('Hello');
};

console.log(exports); //[Function]
console.log(module.exports); //[Function]

//*Important: This works. You can use exports ONLY if you mutate the object, not
//if you assign it. Mutating it like above with the '.greet' does not point the
//exports to a different object. Thus both exports and module.exports above will
//not be empty
