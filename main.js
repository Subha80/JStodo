const inputBox=document.getElementById("add");
const todoitems =document.getElementById("todoitems");

function add(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        todoitems.appendChild(li);  
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
         inputBox.value="";
         saveData();
}
todoitems.addEventListener("click",function(e){
     if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
     }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
     }    
},false);

function saveData(){
    localStorage.setItem("data",todoitems.innerHTML);
}

function showData(){
    todoitems.innerHTML=localStorage.getItem("data");
}

showData();
