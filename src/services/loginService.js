const { User } = require('../models');

const login = (email, password) => {
  if (!email || !password) return { status: 400, message: 'Some required fields are missing' };
  const emailVerify = User.findOne({ where: { email } });
  const passwordVerify = User.findOne({ where: { password } });
  if (!emailVerify || !passwordVerify) return { status: 400, message: 'Invalid fields' };
  const token = 'testetoken';
  return { status: 200, result: token };
};

module.exports = { login };
