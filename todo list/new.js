let input = document.getElementById("input-box");
let list = document.getElementById("list");

function addBtn(){
    if(input.value === ""){
        alert("Please add some text...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value ;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    input.value = '';
    saveData();
}

list.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

showData();