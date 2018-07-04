const PubSub = require('../helpers/pub_sub.js');
const TaskView = function (container) {
  this.container = container;

};

TaskView.prototype.generate = function (task) {
  const taskContainer = document.createElement('div');
  this.container.appendChild(taskContainer);

};
