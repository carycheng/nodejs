var Emitter = require('./emitter');
var eventConfig = require('./config').events;

var emtr = new Emitter();

//event type would be 'greet' here
//checks 'greet' against 'greet' it will match
//pushes function with console.log into object properties array
emtr.on(eventConfig.GREET, function(){
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function(){
  console.log('A greeting occured!');
});

//can use eventConfig.GREET everywhere 'greet' is typed. In this case it is the
//the same as we see above using 'greet' and above using 'eventConfig.GREET'
console.log('Hello!');
emtr.emit('greet');

//*Important: to make this using the node.js emitter, simply require it
//at the top by using: require('events') and all the functions should still be
//the same

//Magic String: A string that has some special meaning in our code, like the
//emitter, typo causes a bug
