// // for in lopp
// var aProperty;
// document.write("Navigator Object Properties<br /> ");        
// for (aProperty in navigator) {
//    document.write(aProperty);
//    document.write("<br />");
// }
// document.write ("Exiting from the loop!");

// w3
var text = "";
var person = {fname:"David", lname:"Joe", age:22};
var x;

for (x in person) {
    text += person[x] + " ";
}

document.write(text)