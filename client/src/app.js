const TaskFormView = require('./views/task_form_view.js');
const TaskListView = require('./views/task_list_view.js');
const TaskView = require('./views/task_view.js');


document.addEventListener('DOMContentloaded', () => {
  console.log("working");
  const taskForm = document.querySelector('#save');
  const taskFormView = new TaskFormView(taskForm);

const taskContainer = document.querySelector('#save');
const taskListView = new TaskListView(taskContainer);
taskListView.bindEvents();


const todoUrl = "http://localhost:3000/api/tasks"
const tasks = newTasks(todoUrl);
tasks.getData();
});
