const loginService = require('../services/loginService');

const createUser = async (req, res) => {
  const user = req.body;
  const token = loginService.createUser(user);
  return res.status(201).json({ token });
};

module.exports = { createUser };
