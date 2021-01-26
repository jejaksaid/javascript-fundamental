var x = 1;
var text = "";

while (x < 20 ) {
    x = x + 1;
    
    if (x == 10 ) {
        continue; //breaking the loop
    }
    text += "<br> The number from break is " + x;

        
}
document.write(text)
