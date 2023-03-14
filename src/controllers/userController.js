const userService = require('../services/userService');

const getAllUsers = async (_req, res) => {
  // #swagger.tags = ['User']
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
  // #swagger.tags = ['User']

  /* #swagger.responses[200] = {
            description: 'Obj user',
    } */

  /* #swagger.responses[404] = {
      description: 'User does not exist',
} */
  const { id } = req.params;
  const { status, message, user } = await userService.getById(id);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(user);
};

const createUser = async (req, res) => {
  // #swagger.tags = ['User']
  /*  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'You need to enter a valid email and password',
        schema: {
            $displayName: 'Brett Wiltshire',
            $email: 'brett@email.com',
            $password: '123456',
            image: 'http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png',
        }
} */

  /* #swagger.responses[201] = {
              description: 'Token',
      } */

  /* #swagger.responses[400] = {
        description: `"displayName" length must be at least 8 characters long
        <hr>"email\" must be a valid email
        <hr>"password\" length must be at least 6 characters long</br>`,
} */

  /* #swagger.responses[409] = {
              description: 'User already registered',
      } */
  const user = req.body;
  const { status, message, token } = await userService.createUser(user);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

const removeCurrentUser = async (req, res) => {
  // #swagger.tags = ['User']
  const { id } = req.body.currentUser;
  const removedUser = await userService.removeCurrentUser(id);
  return res.status(204).json(removedUser);
};

module.exports = { createUser, getAllUsers, getById, removeCurrentUser };
