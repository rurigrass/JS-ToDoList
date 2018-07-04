const TaskFormView = require('./views/task_form_view.js');
const TaskListView = require('./views/task_list_view.js');
const TaskView = require('./views/task_view.js');
const Tasks = require('./models/tasks.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("working");
  const taskForm = document.querySelector('#form');
  const taskFormView = new TaskFormView(taskForm);
  taskFormView.bindEvents();

  const taskContainer = document.querySelector('#list');
  const taskListView = new TaskListView(taskContainer);
  taskListView.bindEvents();

  const todoUrl = "http://localhost:3000/api/tasks"
  const tasks = new Tasks(todoUrl);
  tasks.bindEvents();
  tasks.getData();
});
