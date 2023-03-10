const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = req.body;
  const { status, message, token } = await userService.createUser(user);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

const getAllUsers = async (_req, res) => {
  const allUsers = userService.getAllUsers();
  return res.status(200).json(allUsers);
};

module.exports = { createUser, getAllUsers };
