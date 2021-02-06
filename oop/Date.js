// alert current date
/*
var d = new Date();
alert (d);

document.getElementById("demo").innerHTML;
*/

// extract the year
/*
var d = new Date();
year = d.getFullYear();
document.getElementById("demo").innerHTML = year;
*/

// get month from date object
/*
var d = new Date();
month = d.getMonth();
document.getElementById("demo").innerHTML = month;
*/

// date method to set the year of a date object
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;