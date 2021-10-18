const User = require("./user.model");

async function getUsers(req, res) {
  // READ
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function createUser(req, res) {
  // CREATE
  try {
    const { name: Name } = req.body;
    const newUser = await User.create({ Name });
    res.status(200).send(`Created new user: ${newUser}`);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function editUser(req, res) {
  // UPDATE
  try {
    const { name: Name, id: _id } = req.body;
    await User.updateOne({ _id }, { Name });
    res.status(200).send(`Updated user with ID ${_id}`);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteUser(req, res) {
  // DELETE
  try {
    const { id: _id } = req.body;
    await User.deleteOne({ _id });
    res.status(200).send(`Deleted user with ID ${_id}`);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { getUsers, createUser, editUser, deleteUser };
