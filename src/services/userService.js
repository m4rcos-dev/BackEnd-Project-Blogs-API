const { User } = require('../models');
const { generateToken } = require('../auth/authFunctions');

const createUser = async (user) => {
  await User.crete(user);
  const { password: _, ...userWhithoutPass } = user;
  const token = generateToken(userWhithoutPass);
  return token;
};

module.exports = { createUser };
