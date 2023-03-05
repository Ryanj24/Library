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

tableRows.addEventListener("click", function(e) {
    if (e.target.classList.contains("action-buttons")) {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
})

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let bookTitle = document.querySelector("#title").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookPages = document.querySelector("#pages").value;
    let completedCheck = document.querySelector("#completed").checked;
    let isCompleted = "";

    if (completedCheck === true) {
        isCompleted = "Yes";
    } else {
        isCompleted = "No";
    }

    //console.log(completedCheck);
    //console.log(isCompleted);

    let newBook = new Book(bookTitle, bookAuthor, bookPages, isCompleted);
    addBookToLibrary(newBook);
    addBookToTable(newBook);

    myForm.reset();
    modalContainer.classList.remove("active");

    //console.log(myLibrary);
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

function addBookToTable(book) {
    let newRow = document.createElement("tr");
    for (const property in book) {
        let newCell = document.createElement("td");
        newCell.innerHTML = book[property];
        newRow.appendChild(newCell);
    }
    let actionCell = document.createElement("td");
    actionCell.innerHTML = '<button class="action-buttons"><i class="fa-solid fa-trash"></i>Remove</button>'
    newRow.appendChild(actionCell);
    tableRows.appendChild(newRow);
}
