const PubSub = require('../helpers/pub_sub.js');
const TaskView = require('./task_view.js');

const TaskListView = function (container) {
    this.container = container;
};

TaskListView.prototype.bindEvents = function () {
  console.log("hello");
  PubSub.subscribe('Tasks:data-loaded', (evt) => {
    console.log(evt);
    this.generate(evt.detail);
  });
};


TaskListView.prototype.generate = function (tasks) {
  this.container.innerHTML = '';
  const taskView = new TaskView(this.container);
  console.log(tasks);
  tasks.forEach((task) => taskView.generate(task));
};

module.exports = TaskListView;
