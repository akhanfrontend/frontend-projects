
// adding add function and alert

document.getElementById("btn").onclick = function () {

    let val = document.getElementById("inputBox").value;

    if(val === ""){
        alert ("Request you to please add task")
        return;
    }
    let li = document.createElement("li");

    li.innerText = val;
    

    document.getElementById("taskList").appendChild(li);
    

    document.getElementById("inputBox").value = "";
}
