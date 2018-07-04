const PubSub = require('../helpers/pub_sub.js');

const TaskView = function (container) {
  this.container = container;
};

TaskView.prototype.render = function (task) {
  const taskContainer = document.createElement('p');
  this.container.appendChild(taskContainer);

  const taskName = this.createHeading(task.name);
  taskContainer.appendChild(taskName);

};

// TaskView.prototype.createHeading = function (textContent) {
//   const heading = document.createElement('h4');
//   heading.textContent = textContent;
//   return heading;
//
// };

module.exports = TaskView;
