const { User } = require('../models');
const { generateToken } = require('../auth/authFunctions');

const login = async (email, password) => {
  if (!email || !password) return { status: 400, message: 'Some required fields are missing' };
  const userByEmail = await User.findOne({ where: { email } });
  if (!userByEmail
    || userByEmail.password !== password) return { status: 400, message: 'Invalid fields' };
  const { password: _, ...userWithoutPassword } = userByEmail.dataValues;
  console.log(userWithoutPassword);
  const token = generateToken(userWithoutPassword);
  return { status: 200, token };
};

module.exports = { login };
