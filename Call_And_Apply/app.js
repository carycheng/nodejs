var obj = {
  name: 'John Doe',
  greet : function(){
    console.log(`Helo ${this.name}`);
  }
}

obj.greet();
//these two lines are very similar. The call function makes 'this' keyword point
//to whatever object was passed in
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Jane Doe'});

//Only difference is call() you pass in parameters if need be regularly. Apply
//function takes in an array.
