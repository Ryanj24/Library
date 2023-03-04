// Select elements from DOM
const modalContainer = document.querySelector(".modal-container"); 
const modalCloseBtn = document.querySelector("#modal-close");
const tableRows = document.querySelector("#tableRows");
const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clearBtn");
const myForm = document.querySelector("#myForm");

let myLibrary = [];

addBtn.addEventListener("click", () => {
    modalContainer.classList.add("active");
})

clearBtn.addEventListener("click", () => {
    tableRows.innerHTML = "";
})

modalCloseBtn.addEventListener("click", () => {
    modalContainer.classList.remove("active");
})

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let bookTitle = document.querySelector("#title").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookPages = document.querySelector("#pages").value;
    let isCompleted = document.querySelector("#completed").checked;


    let newBook = new Book(bookTitle, bookAuthor, bookPages, isCompleted);
    addBookToLibrary(newBook);

    myForm.reset();
    modalContainer.classList.remove("active");

    console.log(myLibrary);
})

function Book(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}