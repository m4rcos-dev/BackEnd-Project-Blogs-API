const { User } = require('../models');

const login = async (email, password) => {
  if (!email || !password) return { status: 400, message: 'Some required fields are missing' };
  const emailVerify = await User.findOne({ where: { email } });
  const passwordVerify = await User.findOne({ where: { password } });
  if (!emailVerify || !passwordVerify) return { status: 400, message: 'Invalid fields' };
  const token = 'testetoken';
  return { status: 200, result: token };
};

module.exports = { login };
