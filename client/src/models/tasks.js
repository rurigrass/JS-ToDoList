const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js')

const Tasks = function (url) {
  this.url = url;
};

Tasks.prototype.bindEvents = function () {
  PubSub.subscribe('TaskFormView:task-submitted', (evt) => {
    this.postTask(evt.detail);
  });

};

Tasks.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((tasks) => {
    PubSub.publish('Tasks:data-loaded', tasks);
  });

};

Tasks.prototype.postTask= function (task) {
  const request = new Request(this.url);
  console.log(task);
  request.post(task)
  .then((tasks) => {
    PubSub.publish('Tasks:data-loaded', tasks);
  })

};

module.exports = Tasks;
