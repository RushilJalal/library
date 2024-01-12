const myLibrary = [];

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
    this.info = function () {
        return `Book: ${name} \n Author: ${author} \n Have read: ${read}`;
    }
}

function addBookToLibrary() {
    // name = prompt("Book name: ");
    // author = prompt("Author name: ");
    // read = prompt("Have read? ");
    const book = new Book(name, author, read);
    myLibrary.push(book);
}


addBookToLibrary();