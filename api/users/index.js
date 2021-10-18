const { Router } = require('express');

const controller = require('./users.controller');

const app = new Router();

//Endpoints
app.get('/', controller.getUsers);
app.post('/', controller.createUser);
app.put('/', controller.editUser);
app.delete('/', controller.deleteUser);

module.exports = app;