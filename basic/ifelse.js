var linebreak = "<br />"

document.write("<b>if else</b>")
document.write(linebreak)


var age = 20;
var linebreak = "<br />"

if(age > 21) {
    document.write("Qualifies for driving")
} else {
    document.write("Does not qualify for driving")
}
document.write(linebreak)
document.write(linebreak)


document.write("<b>if else if</b>")
document.write(linebreak)

var book = "linux";
if (book == "history") {
    document.write("<b>History Book</b>")
} else if (book == "maths") {
    document.write("<b>Math Book</b>")
} else if (book == "linux") {
    document.write("<b>Linux Bible</b>")
} else {
    document.write("<b>Unknown Book</b>")
}