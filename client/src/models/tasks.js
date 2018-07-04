const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js')

const Tasks = function (url) {
  this.url = url;
};

// Tasks.prototype.bindEvents = function () {
//   PubSub.subscribe('TaskFormView:task-submitted', (evt) => {
//     this.postTask(evt.detail);
//   });
//
// };

Tasks.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((tasks) => {
    PubSub.publish('Tasks:data-loaded', tasks);
  });
  .catch(console.error);
};

Tasks.prototype. = function () {

};

module.exports = Tasks;
