//Retrieve todo from local Storage or initialize an empty array
let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoList");
const todoList = document.getElementById("todoList");
const todocount = document.getElementById("deleteButton");

//Initialize
document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask());
  todoInput.addEventListener.addEventListener("keydown", function (event) {
    event.preventDefault();
    addTask();
  });
  deleteButton.addEventListener("click", deleteAllTask());
  displayTasks();
});

function addTask() {
  //*some logic
}
function deleteAllTask() {
  //*some logic
}
