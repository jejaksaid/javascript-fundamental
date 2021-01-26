/* 
    for (initialization; test condition; iteration statement) {
        statement(s) to be executed if test condition is true
    }
*/

// declaration variable
var count;
document.write('Starting For Loop' + '<br />');

// forloop
for (count = 0; count < 10000000; count++ ) {
    document.write('Current for loop : ' + count );
    document.write('<br />');
}
// printing for loop
document.write('For loop done, stopped..');
