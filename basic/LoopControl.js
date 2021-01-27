// var x = 1;
// var text = "";

// while (x < 20 ) {
//     x = x + 1;
    
//     if (x == 10 ) {
//         continue; //skip the loop
//     }
//     text += "<br> The number from break is " + x;

        
// }
// document.write(text)

var text = "";
var i;

for (i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    text += "The number is " + i + "<br>";    
}
document.write(text)

var text = "";
var i;

for (i = 0; i < 10; i++) {
    if (i == 4) {
        break;
    }
    text += "The number is " + i + "<br>";
}
document.write(text)

// using label

var cars = ["BMW", "Volvo", "Ford", "Chevrolet"];
var text = "";

list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[3];
    text += cars[4];
}
document.write(text)