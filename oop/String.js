// using == operator, equal strings are equal
/*
var x = "said";
var y = new String("said");

document.getElementById("demo").innerHTML = (x===y);
*/

// using === operator, equal strings are not equal because === operator expects equality in both type and value
var x = new string("said");
var y = new String("said");

document.getElementById("demo").innerHTML = (x===y);