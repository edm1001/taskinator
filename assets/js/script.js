var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskItemEl=document.createElement("li");//DOM
taskItemEl.textContent=("hello");//DOM
tasksToDoEl.appendChild(taskItemEl);
taskItemEl.className = "task-item";

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var createTaskHandler = function(event) {

  event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };
  formEl.addEventListener("submit", createTaskHandler);
  //adds new task on tasks to do