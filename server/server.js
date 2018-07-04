const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// we are getting the mongo client object from the thing we just installed (npm i mongodb)
const createRouter = require('./helpers/create_router.js');
//we are bringing this in from the createRouter file.
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('todo_hub');
  const tasksCollection = db.collection('tasks');
  const tasksRouter = createRouter(tasksCollection);
  //gamesrouter is a kind of helper createrouter object which a Collection gets passed into.
  app.use('/api/tasks', tasksRouter);
  //for the rest of this route look to the gamesrouter.
});

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
