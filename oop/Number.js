/*
var x = 3.14; // number with decimals
var y = 3; // number without decimals

var x = 123e5; // exponent notation +5
var y = 123e-5; // exponent -5

document.write(" + : " + x + "<br>");
document.write(" - : " + y + "<br>");
*/

// var x = (0.2 * 10 + 0.1 * 10) / 10;

// document.write(x);

// var x = 10 ;
// var y = 20;
// var z = "\'30'";
// console.log("result :" + x + y +z)

// Numeric string
var x = "100";
var y = "10";
console.log(x+y);

// Not a Number (NaN)
var x = NaN;
var y = "5";
var z = x - y;
console.log(z)

// infinity
var myNumber = 2;
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
document.write(myNumber);

// hexadecimal
var x = 0xFF; 
console.log(x)

// number can be object
var x = new Number(123);
var y = 123;
console.log(typeof(x));
console.log(typeof(y));