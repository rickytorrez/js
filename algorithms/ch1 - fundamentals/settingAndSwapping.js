// chapter 1 //

// set myNumber to 42. Set myName to your name //
// now swap myNumber and myName & vice versa //

var myName = "Ricky";
var myNumber = 42;

console.log("my name is " + myName);
console.log("my number is " + myNumber);

var x = myName;
var myName = myNumber;
var myNumber = x;

console.log(x);
console.log("my name has been swapped and is now " + myName);
console.log("my number has been swapped and is now " + myNumber);