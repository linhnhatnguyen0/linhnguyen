const todoInput = document.querySelector(".todo-input");
const todoCreateBtn = document.querySelector(".todo-create-btn");
const todoList = document.querySelector(".todo-list");

todoCreateBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  event.preventDefault();
  if (todoInput.value != "") {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoContent = document.createElement("li");
    todoContent.classList.add("todo-content");
    todoContent.innerText = todoInput.value;
    todoItem.appendChild(todoContent);

    const todoButton = document.createElement("div");
    todoButton.classList.add("todo-button");
    todoItem.appendChild(todoButton);

    const todoCheck = document.createElement("button");
    todoCheck.innerHTML =
      '<ion-icon name="checkmark-circle-outline"></ion-icon>';
    todoCheck.classList.add("btn-check");
    todoButton.appendChild(todoCheck);

    const todoTrash = document.createElement("button");
    todoTrash.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    todoTrash.classList.add("btn-trash");
    todoButton.appendChild(todoTrash);

    todoList.appendChild(todoItem);

    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "btn-trash") {
    const todo = item.parentElement;
    const rtodo = todo.parentElement;
    rtodo.remove();
  }
  if (item.classList[0] === "btn-check") {
    const todo = item.parentElement;
    const rtodo = todo.parentElement;
    rtodo.classList.toggle("completed");
  }
}
