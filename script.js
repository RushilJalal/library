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


// addBookToLibrary();

const tableBody = document.querySelector('#dataTable tbody');

myLibrary.forEach(book => {
    const row = tableBody.insertRow();

    for (const prop in book) {
        if (book.hasOwnProperty(prop)) {
            const cell = row.insertCell();
            cell.textContent = book[prop];
        }
    }
})

// function initTable() {
//     const tableBody = document.querySelector('#dataTable tbody');

//     // Clear existing rows
//     tableBody.innerHTML = '';

//     // Populate the table with data
//     myLibrary.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `<td>${item.name}</td><td>${item.author}</td><td><button onclick="deleteRow(this)">Delete</button></td>`;
//         tableBody.appendChild(row);
//     });
// }

// // Function to add a new row to the table
// function addRow() {
//     const tableBody = document.querySelector('#dataTable tbody');
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = '<td>New Name</td><td>New Age</td><td><button onclick="deleteRow(this)">Delete</button></td>';
//     tableBody.appendChild(newRow);
// }

// // Function to delete a row from the table
// function deleteRow(button) {
//     const row = button.closest('tr');
//     const tableBody = document.querySelector('#dataTable tbody');
//     tableBody.removeChild(row);
// }

// // Initialize the table when the page loads
// initTable();