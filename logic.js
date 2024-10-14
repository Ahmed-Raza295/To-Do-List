let btn = document.querySelector(".addBtn");
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let lis = document.querySelector("li")

btn.addEventListener("click", function(){

if(input.value === ""){
    alert("Please enter task")
}else{
    let li = document.createElement("li")
    li.innerHTML = `${input.value} <i class="fa-solid fa-trash">`
    ul.append(li)
    // let libtn  = document.createElement("button")
    // libtn.innerHTML = "Delete"
    // li.appendChild(libtn)
    input.value = ""
  
  
li.addEventListener("click", function(){
li.classList.toggle("dom")

})

    li.querySelector("i").addEventListener("click", function(){
li.remove();
    })
}

li

})



