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
    this.info = function () {
        return `Book: ${name} \n Author: ${author} \n Have read: ${read}`;
    }
}

function addBookToLibrary(name, author, read) {
    const book = new Book(name, author, read);
    myLibrary.push(book);
}

const tableBody = document.querySelector('#dataTable tbody');

myLibrary.forEach(book => {
    const row = tableBody.insertRow();

    for (const prop in book) {
        if (book.hasOwnProperty(prop)) {
            const cell = row.insertCell();
            cell.textContent = book[prop];
        }
    }
});

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#add-book');
const closeButton = document.querySelector('#close-button');
const submitButton = document.querySelector('#submit-button');

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
});
