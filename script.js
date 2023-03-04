// Select elements from DOM
const modalContainer = document.querySelector(".modal-container"); 
const tableRows = document.querySelector("#tableRows");
const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clearBtn");
const myForm = document.querySelector("#myForm");

addBtn.addEventListener("click", () => {
    modalContainer.classList.add("active");
})

clearBtn.addEventListener("click", () => {
    tableRows.innerHTML = "";
})

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let completed = document.querySelector("#completed").checked;

    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(completed);

    modalContainer.classList.remove("active");
})