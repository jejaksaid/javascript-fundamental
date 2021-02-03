/*
var book = new Object(); //create object
book.subject = "perl";
book.author = "said";

// printing 

document.write("Book name : " + book.subject + "<br>");
document.write("Author name : " + book.author + "<br>")

*/

function book(title, author) {
    this.title = title;
    this.author = author;
}

var myBook = new book("Python", "Saidramadhan");

document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");