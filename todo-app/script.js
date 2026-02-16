
// adding add and alert function

document.getElementById("btn").onclick = function () {
    
    let val = document.getElementById("inputBox").value;

    if(val === ""){
        alert ("Please add your task first");
        return ;
    }

    let li = document.createElement("li");
    li.innerHTML = val;

    let delBtn = document.createElement("button");
    delBtn.innerText = "❌"

    li.appendChild(delBtn);

    delBtn.onclick = function (){
        li.remove ();
    }

    document.getElementById("taskList").appendChild(li);

    document.getElementById("inputBox").value = "";


};
