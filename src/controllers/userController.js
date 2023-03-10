const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = req.body;
  const token = await userService.createUser(user);
  return res.status(201).json({ token });
};

module.exports = { createUser };
