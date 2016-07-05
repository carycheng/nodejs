var firstname = 'Jane';

(function(){
  var firstname = 'John';
  console.log(firstname);
}());

console.log(firstname);

//Wrapping the function in a paranthesis will make that function
//immediately invoked. That means that even though Jane is
//logged first, the function will still run first and the var firstname
//declaration will have no effect on the function that follows.

//This simulates a module, because nothing outside of the function affects
//the function actions, because the function always occurs first.


//can also pass in parameter
(function(lastname){
  var firstname = 'John';
  console.log(lastname);
  console.log(firstname);
}('Doe'));
