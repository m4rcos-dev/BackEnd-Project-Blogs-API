const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = req.body;
  const { status, message, token } = await userService.createUser(user);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

const getAllUsers = async (_req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, message, user } = await userService.getById(id);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(user);
};

const removeCurrentUser = async (req, res) => {
  const { id } = req.body.currentUser;
  const removedUser = await userService.removeCurrentUser(id);
  return res.status(204).json(removedUser);
};

module.exports = { createUser, getAllUsers, getById, removeCurrentUser };
