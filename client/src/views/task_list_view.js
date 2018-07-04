const PubSub = require('../helpers/pub_sub.js');
const TaskView = require('./task_view.js');

const TaskListView = function (container) {
    this.container = container;
};

TaskListView.prototype.bindEvents = function () {
  PubSub.subscribe('Tasks:data-loaded', (evt) => {
    this.generate(evt.detail);
  });
};


TaskListView.prototype.generate = function (tasks) {
  this.container.innerHTML = '';
  tasks.forEach((task) => {
  const taskContainer = document.createElement('div');
  this.container.appendChild(taskContainer);

  const heading = document.createElement('h4');
  heading.textContent = task.task;
  taskContainer.appendChild(heading);

  const detail = document.createElement('p');
  detail.textContent = task.details;
  taskContainer.appendChild(detail);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.value = task._id;
  taskContainer.appendChild(deleteButton);

  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('TaskList:task-delete-clicked', evt.target.value);
  });

});
  return this.container
};

module.exports = TaskListView;
