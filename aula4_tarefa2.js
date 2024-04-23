function addTask(){
    let task = document.getElementById('texto').value.trim();

    if(task === ""){
        alert("Enter a valid task");
        return;
    }

    let list = document.getElementById("todo_list");
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText= task;


    let deleteButton = document.createElement("input")
    deleteButton.setAttribute("type","button");
    deleteButton.setAttribute("value","Delete");
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() { 
        li.remove(); 
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);

    document.getElementById('texto').value = "";

}