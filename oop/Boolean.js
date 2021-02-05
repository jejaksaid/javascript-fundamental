function book(title, publisher, price) {
    this.title = title;
    this.publisher = publisher;
    this.price = price;
}

var newBook = new book("Python", "Python Org", 2000);
document.write(newBook.toSource())