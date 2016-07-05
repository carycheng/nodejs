var buf = new Buffer('Hello', 'utf8'); //utf8 is the default
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(bug[2]);//can use buffer just like an array

buf.write('wo'); //the initial buffer allowed for 5 characters. The expectation
//is that you pull things out of the buffer as you write to it.

console.log(buf.toString());
