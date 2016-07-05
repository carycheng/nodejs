function Emitter(){
  this.events = {
  };
}

//Event Listener: The code that responds to an event, in javascript it is
//usually a function
Emitter.prototype.on = function(type, listener){
  //if this property exists, great, otherwise make it a new array
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
  //pass in object name here, check to see if a particular property name is used.
  //if it is an actual property name on an object then carry out the function
  if(this.events[type]){
    //loop through to see if there are functions in the array and execute them
    this.events[type].forEach(function(listener){
      listener();
    });
  }
}

module.exports = Emitter;
