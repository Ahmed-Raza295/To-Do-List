let btn = document.querySelector(".addBtn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");
let saveBtn = document.querySelector(".saveBtn");
let searchInput = document.querySelector(".search input");
let editIndex = null;

btn.addEventListener("click", function () {
    if (input.value === "") {
        alert("Please Enter your Task")
    }
    else if (editIndex !== null) {
        // ul.children[editIndex].textContent = input.value
        ul.children[editIndex].querySelector("spain").textContent = input.value
        input.value = ""
        editIndex = null
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = `<li> <spain>${input.value}</spain> <div class="icon"><spain class= "edit-icon"><i class="fa-solid fa-pen-to-square fa"></i></spain> <spain class = "delete-icon"><i class="fa-solid fa-trash"></spain></div></li>`
        ul.append(li)
        input.value = ""
        li.addEventListener("click", function () {
            li.classList.toggle("dom")
        })

        li.querySelector(".edit-icon").addEventListener("click", (e) => {
            e.stopPropagation();
            input.value = e.target.parentElement.parentElement.parentElement.textContent.trim();
            const lit = e.target.parentElement.parentElement.parentElement.parentElement;
            for (let i = 0; i < ul.children.length; i++) {

                if (ul.children[i] === lit) {
                    editIndex = i
                    console.log(editIndex)
                }
            }
        })

        li.querySelector(".delete-icon").addEventListener("click", function (e) {
            e.target.parentElement.parentElement.parentElement.remove()
        })
    }
})

function filderTodos(searchText) {
    for (let i = 0; i < ul.children.length; i++) {
        const li = ul.children[i];
        if (!li.textContent.includes(searchText)) {
            li.classList.add("filtered")
        } else {
            li.classList.remove("filtered")
        }
    }
}
searchInput.addEventListener("keyup", function (e) {
    let searchText = e.target.value;
    filderTodos(searchText)
})
