const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = req.body;
  const { status, message, token } = await userService.createUser(user);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

module.exports = { createUser };
