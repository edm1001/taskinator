var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler= function(event) {

  event.preventDefault()
  var taskNameInput = document.querySelector("input[name='task-name']").value;//(input[class=tag]) allows targeting of HTML & allows user to enter whatever
  var taskTypeInput= document.querySelector("select[name='task-type']").value//targets the scrolldown for task type.
    
  //package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  //send it as an argument to createTaskEl
  createTaskEl(taskDaraObj);
};
  var createTaskEl = function(taskDataObj){
    
    // create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
  };

  formEl.addEventListener("submit", taskFormHandler);
  //adds new task on tasks to do