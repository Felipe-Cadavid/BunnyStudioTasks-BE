const { Router } = require('express');

const controller = require('./tasks.controller');

const app = new Router();

//Endpoints
app.get('/', controller.getTasks);
app.post('/', controller.createTask);
app.put('/', controller.editTask);
app.delete('/', controller.deleteTask);

module.exports = app;