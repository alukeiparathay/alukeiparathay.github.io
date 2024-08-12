function deleteTask(e) {
    const clickedButton = e.target;
    clickedButton.parentElement.remove();
}

function clickHandler() {
    const newTaskInput = document.getElementById("new-task-input")
    const newTask = (newTaskInput.value);
    const newListItem = document.createElement("li")
    newListItem.innerText = newTask;
    newListItem.classList = "list-group-item d-flex justify-content-between align-items-center"

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove Tweet";
    deleteButton.classList = "btn btn-danger btn-sm";
    deleteButton.addEventListener("click", deleteTask)
    newListItem.appendChild(deleteButton);


    const List = document.getElementById("todo-list");

    // List.appendChild(newListItem);
    List.insertBefore(newListItem, List.firstChild);

    newTaskInput.value = ""
}

const button = document.getElementById("add-task-btn");
button.addEventListener("click", clickHandler);



const arrayofDeleteButtons = document.getElementsByClassName("delete-button");

for (let i=0; i<arrayofDeleteButtons ; i++){
    arrayofDeleteButtons[i].addEventListener("click", deleteTask)
}