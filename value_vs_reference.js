//pass by value
function change(b){
  b = 2;
}

//this will not change the value of a. b becomes a
//copy of a. So when change function is called , it does
//not impact the variable a at al
var a = 1;
change(a);
console.log(a);

//pass by reference
function changeObj(d){
  d.prop1 = function(){};
  d.prop2 = {};
}

//c here is an empty object, so it is pass by reference/
//That means once it is passed into the function chageObj,
//whatever we do to d, we also do to c, because they are
//referencing the same memory address
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

/*takeaways*/
//for primitive values, we make a copy of that variable. Thus,
//it changes a different spot in memory
//objects is pass by reference, it references the same spot in
//memory, thus changes will be reflected
