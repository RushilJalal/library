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

console.log(myLibrary);

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
}

const tableBody = document.querySelector('#dataTable tbody');

function displayLibrary() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.textContent = ''; // Clear existing rows in table

    //display array of objects
    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        titleCell.textContent = book.name;
        row.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const readCell = document.createElement('td');
        readCell.textContent = book.read;
        row.appendChild(readCell);

        const toggleread = document.createElement('button');
        toggleread.textContent = 'Toggle read';
        row.appendChild(toggleread);
        toggleread.addEventListener('click', () => toggleRead(index))

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        row.appendChild(removeButton);
        removeButton.addEventListener('click', () => removeBook(index));

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
    bookform.reset();
    dialog.close();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

function toggleRead(index) {
    const boolValue = Boolean(myLibrary[index].read); // converts value attribute from string to boolean
    myLibrary[index].read = !boolValue;
    displayLibrary();
}

displayLibrary(); //default library with 2 books


