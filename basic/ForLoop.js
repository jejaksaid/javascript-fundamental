/* 
    for (initialization; test condition; iteration statement) {
        statement(s) to be executed if test condition is true
    }
*/

// declaring variable
/*
var count;
document.write('Starting For Loop' + '<br />');

// forloop
for (count = 0; count < 10000000; count++ ) {
    document.write('Current for loop : ' + count );
    document.write('<br />');
}
// printing for loop
document.write('For loop done, stopped..');


*/
// from w3school
var cars = ["BMW", "Mercy", "Lamborgini", "Audi"];
var i, len, text;

for (i = 0, len = cars.length, text=""; i < len; i++) {
    text +=cars[i] + "<br>";
}
document.write(text);