const myLibrary = [
    {
        name: 'Lord of the Rings',
        author: 'JRR Tolkein',
        read: "no"
    },
    {
        name: 'Animal Farm',
        author: 'George Orwell',
        read: "yes"
    }
];

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
}

const tableBody = document.querySelector('#dataTable tbody');

function displayLibrary() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    myLibrary.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.name}</td><td>${book.author}</td><td>${book.read}</td>`;
        tableBody.appendChild(row);
    });
}

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

function addBook() {
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById('haveRead').value;
    const book = new Book(name, author, read);
    myLibrary.push(book);
    displayLibrary();
    console.log(myLibrary);
    bookform.reset();
    dialog.close();
}

displayLibrary(); //default library with 2 books


