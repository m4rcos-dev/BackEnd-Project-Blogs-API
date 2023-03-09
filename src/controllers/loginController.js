const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, message, result } = await loginService.login(email, password);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(result);
};

module.exports = { login };
