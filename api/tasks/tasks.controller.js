const Task = require("./task.model");

async function getTasks(req, res) {
  // READ
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function createTask(req, res) {
  // CREATE
  try {
    const { description, user_id } = req.body;
    const newTask = await Task.create({ description, user_id });
    res.status(200).send(`Created new task: ${newTask}`);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function editTask(req, res) {
  // UPDATE
  try {
    const { description, id: _id } = req.body;
    await Task.updateOne({ _id }, { description });
    res.status(200).send(`Updated task with ID ${_id}`);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteTask(req, res) {
  // DELETE
  try {
    const { id: _id } = req.body;
    await Task.deleteOne({ _id });
    res.status(200).send(`Deleted task with ID ${_id}`);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { getTasks, createTask, editTask, deleteTask };
