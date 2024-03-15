const search=document.getElementById("search");
const listContainer=document.getElementById("container-list");

function addTask(){
    if(search.value=== ''){
        alert("you must enter something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=search.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    save();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function show(){
    listContainer.innerHTML=localStorage.getItem("data");
}
show();