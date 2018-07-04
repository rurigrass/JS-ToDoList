/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TaskFormView = __webpack_require__(/*! ./views/task_form_view.js */ \"./client/src/views/task_form_view.js\");\nconst TaskListView = __webpack_require__(/*! ./views/task_list_view.js */ \"./client/src/views/task_list_view.js\");\nconst TaskView = __webpack_require__(/*! ./views/task_view.js */ \"./client/src/views/task_view.js\");\nconst Tasks = __webpack_require__(/*! ./models/tasks.js */ \"./client/src/models/tasks.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"working\");\n  const taskForm = document.querySelector('#form');\n  const taskFormView = new TaskFormView(taskForm);\n  taskFormView.bindEvents();\n\n  const taskContainer = document.querySelector('#list');\n  const taskListView = new TaskListView(taskContainer);\n  taskListView.bindEvents();\n\n  const todoUrl = \"http://localhost:3000/api/tasks\"\n  const tasks = new Tasks(todoUrl);\n  tasks.bindEvents();\n  tasks.getData();\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request.js":
/*!***************************************!*\
  !*** ./client/src/helpers/request.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n this.url = url;\n};\n\nRequest.prototype.get = function () {\n return fetch(this.url)\n   .then((response) => response.json());\n};\n\nRequest.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: {'Content-Type': 'application/json'}\n  })\n  .then((response) => response.json());\n};\n\nRequest.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n  .then((response) => response.json());\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request.js?");

/***/ }),

/***/ "./client/src/models/tasks.js":
/*!************************************!*\
  !*** ./client/src/models/tasks.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst Tasks = function (url) {\n  this.url = url;\n};\n\nTasks.prototype.bindEvents = function () {\n\n  PubSub.subscribe('TaskList:task-delete-clicked', (evt) => {\n    console.log(evt.detail);\n    this.deleteTask(evt.detail);\n  });\n\n  PubSub.subscribe('TaskFormView:task-submitted', (evt) => {\n    this.postTask(evt.detail);\n  });\n\n};\n\nTasks.prototype.getData = function () {\n  const request = new Request(this.url);\n  request.get()\n  .then((tasks) => {\n    PubSub.publish('Tasks:data-loaded', tasks);\n  });\n\n};\n\nTasks.prototype.postTask = function (task) {\n  const request = new Request(this.url);\n  console.log(task);\n  request.post(task)\n  .then((tasks) => {\n    PubSub.publish('Tasks:data-loaded', tasks);\n  })\n\n};\n\nTasks.prototype.deleteTask = function (taskId) {\n  console.log(taskId);\n  const request = new Request(this.url);\n  request.delete(taskId)\n  .then((tasks) => {\n    PubSub.publish('Tasks:data-loaded', tasks);\n  })\n\n};\n\nmodule.exports = Tasks;\n\n\n//# sourceURL=webpack:///./client/src/models/tasks.js?");

/***/ }),

/***/ "./client/src/views/task_form_view.js":
/*!********************************************!*\
  !*** ./client/src/views/task_form_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst TaskFormView = function(form){\n  this.form = form;\n};\n\nTaskFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (evt) =>{\n    this.handleSubmit(evt);\n  });\n};\n\nTaskFormView.prototype.handleSubmit = function (evt) {\n  evt.preventDefault();\n  const newTask = this.createTask(evt.target);\n  PubSub.publish('TaskFormView:task-submitted', newTask);\n  evt.target.reset();\n};\n\nTaskFormView.prototype.createTask = function (form) {\n  const newTask = {\n    task: form.task.value,\n    details: form.details.value\n  }\n  return newTask;\n};\n\nmodule.exports = TaskFormView;\n\n\n//# sourceURL=webpack:///./client/src/views/task_form_view.js?");

/***/ }),

/***/ "./client/src/views/task_list_view.js":
/*!********************************************!*\
  !*** ./client/src/views/task_list_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst TaskView = __webpack_require__(/*! ./task_view.js */ \"./client/src/views/task_view.js\");\n\nconst TaskListView = function (container) {\n    this.container = container;\n};\n\nTaskListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Tasks:data-loaded', (evt) => {\n    this.generate(evt.detail);\n  });\n};\n\n\nTaskListView.prototype.generate = function (tasks) {\n  this.container.innerHTML = '';\n  tasks.forEach((task) => {\n  const taskContainer = document.createElement('div');\n  this.container.appendChild(taskContainer);\n\n  const heading = document.createElement('h4');\n  heading.textContent = task.task;\n  taskContainer.appendChild(heading);\n\n  const detail = document.createElement('p');\n  detail.textContent = task.details;\n  taskContainer.appendChild(detail);\n\n  const deleteButton = document.createElement('button');\n  deleteButton.classList.add('delete-btn');\n  deleteButton.value = task._id;\n  taskContainer.appendChild(deleteButton);\n\n  deleteButton.addEventListener('click', (evt) => {\n    PubSub.publish('TaskList:task-delete-clicked', evt.target.value);\n  });\n\n});\n  return this.container\n};\n\nmodule.exports = TaskListView;\n\n\n//# sourceURL=webpack:///./client/src/views/task_list_view.js?");

/***/ }),

/***/ "./client/src/views/task_view.js":
/*!***************************************!*\
  !*** ./client/src/views/task_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst TaskView = function (container) {\n  this.container = container;\n};\n\nTaskView.prototype.render = function (task) {\n  const taskContainer = document.createElement('p');\n  this.container.appendChild(taskContainer);\n\n  const taskName = this.createHeading(task.name);\n  taskContainer.appendChild(taskName);\n\n};\n\n// TaskView.prototype.createHeading = function (textContent) {\n//   const heading = document.createElement('h4');\n//   heading.textContent = textContent;\n//   return heading;\n//\n// };\n\nmodule.exports = TaskView;\n\n\n//# sourceURL=webpack:///./client/src/views/task_view.js?");

/***/ })

/******/ });