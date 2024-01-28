const myLibrary = [
    {
        name: 'Lord of the Rings',
        author: 'JRR Tolkein',
        read: false
    },
    {
        name: 'Animal Farm',
        author: 'George Orwell',
        read: true
    }
];

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
    // this.info = function () {
    //     return `Book: ${name} \n Author: ${author} \n Have read: ${read}`;
    // }
}

function addBookToLibrary(name, author, read) {
    const book = new Book(name, author, read);
    myLibrary.push(book);
}

const tableBody = document.querySelector('#dataTable tbody');

function book_display() {
    myLibrary.forEach(book => {
        const row = tableBody.insertRow();
        for (const prop in book) {
            if (book.hasOwnProperty(prop)) {
                const cell = row.insertCell();
                cell.textContent = book[prop];
            }
        }
    });
}

// book_display();

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#add-book');
const closeButton = document.querySelector('#close-button');
const submitButton = document.querySelector('#submit-button');
const bookform = document.querySelector("#bookform");

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const read = true;
    addBookToLibrary(name, author, read);
    console.log(myLibrary);
    dialog.close();
    book_display();
    bookform.reset();
});

