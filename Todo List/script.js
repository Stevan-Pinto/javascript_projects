const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addToDoBtn = document.getElementById("addToDoBtn");

addToDoBtn.addEventListener("click", () => {

  const newToDoText = newToDoInput.value;

  if (newToDoText!== "") {
    const newToDoItem = document.createElement("li");
    newToDoItem.innerText = newToDoText;

    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.innerText = "X";

    deleteTodoBtn.classList.add("delete-todo-btn");
    deleteTodoBtn.addEventListener("click", () => {
      newToDoItem.remove();
    });


    newToDoItem.appendChild(deleteTodoBtn);
    todoList.appendChild(newToDoItem);
    newToDoInput.value = "";
  }
});
