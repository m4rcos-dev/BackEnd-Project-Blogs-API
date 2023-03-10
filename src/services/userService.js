const { User } = require('../models');
const { generateToken } = require('../auth/authFunctions');

const createUser = async (user) => {
  const { email } = user;
  const verifyDuplicity = await User.findOne({ where: { email } });
  if (verifyDuplicity) return { status: 409, message: 'User already registered' };
  await User.create(user);
  const { password: _, ...userWhithoutPass } = user;
  const token = generateToken(userWhithoutPass);
  return { status: 201, token };
};

const getAllUsers = async () => {
 const allUsers = await User.findAll();
 return allUsers;
};

module.exports = { createUser, getAllUsers };
