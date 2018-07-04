const PubSub = require('../helpers/pub_sub.js');

const TaskFormView = function(form){
  this.form = form;
};

TaskFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) =>{
    this.handleSubmit(evt);
  });
};

TaskFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newTask = this.createTask(evt.target);
  PubSub.publish('TaskFormView:task-submitted', newTask);
  evt.target.reset();
};

TaskFormView.prototype.createTask = function (form) {
  const newTask = {
    task: form.task.value
  }
  return newTask;
};

module.exports = TaskFormView;
