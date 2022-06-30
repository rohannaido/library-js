let myLibrary = JSON.parse(localStorage.getItem("LIBRARY_BOOKS"));

const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pagecount-input");
const booksTable = document.querySelector(".books-table-div table tbody");
const readInput = document.querySelector(".new-book-info input[type='radio']");

const newBookBtn = document.querySelector(".new-book-submit")

displayLibrary();

newBookBtn.addEventListener("click", addBookToLibrary)


function saveLibrary(){
    let stringList = JSON.stringify(myLibrary);
    localStorage.setItem("LIBRARY_BOOKS", stringList);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e){
    e.preventDefault();
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    addBookToTable(newBook);
    saveLibrary();
}

function displayLibrary() {
    for(const book of myLibrary){
        addBookToTable(book);
    }
}

function addBookToTable(book){
    let newRow = document.createElement("tr");

    let newTitleCell = document.createElement("td");
    let newAuthorCell = document.createElement("td");
    let newPagesCell = document.createElement("td");
    let newReadCell = document.createElement("td");
    
    newTitleCell.innerText = book.title;
    newAuthorCell.innerText = book.author;
    newPagesCell.innerText = book.pages;
    newReadCell.innerText = book.read;
    
    newRow.appendChild(newTitleCell);
    newRow.appendChild(newAuthorCell);
    newRow.appendChild(newPagesCell);
    newRow.appendChild(newReadCell);

    booksTable.appendChild(newRow);
}

