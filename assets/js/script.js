var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskItemEl=document.createElement("li");//DOM
taskItemEl.textContent=("hello");//DOM
tasksToDoEl.appendChild(taskItemEl);
taskItemEl.className = "task-item";

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }
  buttonEl.addEventListener("click", createTaskHandler);
  //adds new task on tasks to do