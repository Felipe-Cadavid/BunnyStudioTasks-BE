const users = require('../api/users');
const tasks = require('../api/tasks');

module.exports = app => {
    app.use('/api/users', users);
    app.use('/api/tasks', tasks);    
}