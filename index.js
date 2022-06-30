let myLibrary = [];
myLibrary.push(new Book("asdf","aasdsdf",24355, true));
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pagecount-input");
const booksTable = document.querySelector(".books-table-div table");

const newBookBtn = document.querySelector(".new-book-submit")

displayLibrary();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e){
    e.preventDefault();
    let title = titleInput.value;
    console.log(title + " TITLE")
    myLibrary.push(new Book("asdf","asdfaadsf",234223, true));
    displayLibrary();
}

function displayLibrary() {
    
    for(const book of myLibrary){
        console.log(book);
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
    // booksTable.
}

newBookBtn.addEventListener("click", addBookToLibrary)
