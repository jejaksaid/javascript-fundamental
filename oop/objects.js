/*
var book = new Object(); //create object
book.subject = "perl";
book.author = "said";

// printing 

document.write("Book name : " + book.subject + "<br>");
document.write("Author name : " + book.author + "<br>")

*/
/*
function book(title, author) {
    this.title = title;
    this.author = author;
}

var myBook = new book("Python", "Saidramadhan");

document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");
*/


// define a function which will work as a method 
/*
function addPrice(amount) {
    this.price = amount;
}

function book(title, author) {
    this.title = title;
    this.author = author;
    this.addPrice = addPrice; // assign that method as property
}

var myBook = new book("Javascript", "saidramadhan");
myBook.addPrice(`$ 100`);

document.write("Book title : " + myBook.title + "<br>");
document.write("Book author : " + myBook.author + "<br>")
document.write("Book Price : " + myBook.price + "<br>")
*/

function addPrice(amount) {
    with(this) {
        price = amount;
    }
}

function book(title, author) {
    this.title = title;
    this.author = author;
    this.price = 0;
    this.addPrice = addPrice // assign that method as property
}

var myBook = new book("CSS", "Saidramadhan");
myBook.addPrice(500);

document.write("Book title : " + myBook.title +  "<br>");
document.write("Book Author : " + myBook.author + "<br>")
document.write("Book price : " + myBook.price + "<br>")