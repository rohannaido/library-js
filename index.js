let myLibrary = [];

if(localStorage.getItem("LIBRARY_BOOKS")){
    myLibrary = JSON.parse(localStorage.getItem("LIBRARY_BOOKS"));
}

const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pagecount-input");
const booksTable = document.querySelector(".books-table-div table");
let booksTableBody = document.querySelector(".books-table-div table tbody");
const readInput = document.querySelector(".new-book-info input[type='radio']");

let key = 0;
// const newBookBtn = document.querySelector(".new-book-submit")
const form = document.querySelector("form");
displayLibrary();

form.addEventListener("submit", addBookToLibrary)


function saveLibrary(){
    let stringList = JSON.stringify(myLibrary);
    localStorage.setItem("LIBRARY_BOOKS", stringList);
}

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadUnreadData = function() {
    this.read = !this.read;
}

//Add single book to library
function addBookToLibrary(e){
    e.preventDefault();
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    console.log(newBook)
    addBookToTable(newBook);
    saveLibrary();
}

//Display all the books
function displayLibrary() {
    booksTableBody.remove();
    booksTable.appendChild(document.createElement("tbody"));
    booksTableBody = document.querySelector(".books-table-div table tbody");

    for(let i = 0; i < myLibrary.length; i++){
        addBookToTable(myLibrary[i]);
    }
}

//Add book to table element in HTML
function addBookToTable(book){
    let newRow = document.createElement("tr");
    
    let newTitleCell = document.createElement("td");
    let newAuthorCell = document.createElement("td");
    let newPagesCell = document.createElement("td");
    let newReadCell = document.createElement("td");
    let newReadButton = document.createElement("button");

    let newDeleteCell = document.createElement("td");
    let newDeleteButton = document.createElement("button");

    newTitleCell.innerText = book.title;
    newAuthorCell.innerText = book.author;
    newPagesCell.innerText = book.pages;

    newReadButton.innerText = book.read ? "Read" : "Unread";
    newReadButton.classList = "book-read-unread-button";
    newReadButton.setAttribute("data-key", key);
    newReadCell.appendChild(newReadButton);
    newReadButton.addEventListener("click", toggleReadUnread);

    newDeleteButton.innerText = "X";
    newDeleteButton.classList = "book-delete-button";
    newDeleteButton.setAttribute("data-key", key);
    newDeleteCell.appendChild(newDeleteButton);
    newDeleteButton.addEventListener("click", deleteItem);
    
    newRow.appendChild(newTitleCell);
    newRow.appendChild(newAuthorCell);
    newRow.appendChild(newPagesCell);
    newRow.appendChild(newReadCell);
    newRow.appendChild(newDeleteCell);
    
    booksTableBody.appendChild(newRow);
    key++;
}

//Toggle Read Unread function
function toggleReadUnread(e){
    let index = (e.target.getAttribute("data-key"));
    // myLibrary[index].read = !myLibrary[index].read;
    console.log(myLibrary[index].prototype);
    myLibrary[index].toggleReadUnreadData();
    e.target.innerText = myLibrary[index].read ? "Read" : "Unread";
    displayLibrary();
    saveLibrary();
}

function deleteItem(e){
    let index = (e.target.getAttribute("data-key"));
    myLibrary.splice(index, 1);
    saveLibrary();
    key = 0;
    displayLibrary();
}