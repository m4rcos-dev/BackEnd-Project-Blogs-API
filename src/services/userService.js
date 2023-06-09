const { User } = require('../models');
const { generateToken } = require('../auth/authFunctions');

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) return { status: 404, message: 'User does not exist' };
  return { status: 200, user };
};

const createUser = async (user) => {
  const { email } = user;
  const verifyDuplicity = await User.findOne({ where: { email } });
  if (verifyDuplicity) return { status: 409, message: 'User already registered' };
  await User.create(user);
  const { password: _, ...userWhithoutPass } = user;
  const token = generateToken(userWhithoutPass);
  return { status: 201, token };
};

const removeCurrentUser = async (id) => {
  await User.destroy({ where: { id } });
  return null;
};

module.exports = { createUser, getAllUsers, getById, removeCurrentUser };
