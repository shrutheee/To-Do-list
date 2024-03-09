function addTask() {
  const newTaskInput = document.getElementById("newTask");
  const taskText = newTaskInput.value.trim();

  if (taskText !== "") {
    const todoList = document.getElementById("todoList");

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="btn btn-danger btn-sm float-right" onclick="removeTask(this)">Remove</button>
        `;

    // Append the new list item to the to-do list
    todoList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = "";
  }
}

function removeTask(button) {
  const listItem = button.parentNode;
  const todoList = document.getElementById("todoList");
  todoList.removeChild(listItem);
}
