function Greetr(){
  this.greeting = "Hello World!!!";
  this.greet = function(){
    console.log(this.greeting);
  }
}

//to stop referencing the same object, do not use new here. Allow yourself to
//create the object in the app.js file manually instead of with require()
module.exports = Greetr;
