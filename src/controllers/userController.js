const userService = require('../services/userService');

const getAllUsers = async (_req, res) => {
  // #swagger.tags = ['User']
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
  // #swagger.tags = ['User']
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
              description: 'If the user is created successfully the returned result should be as shown below',
              schema: {
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8',
              }
      } */

  /* #swagger.responses[400] = {
        description: `1- If the request does not have the displayName field properly filled with 8 characters or more, the returned result should be as shown below
        <hr>2 - If the request does not have the email field properly filled in with the format <prefix@domain>, the returned result should be as shown below
        <hr>3 - If the request does not have the password field duly filled with 6 characters or more, the returned result should be as shown below`,
        schema: [{
            1: {message: '"displayName" length must be at least 8 characters long'},
            2: {message: '"email" must be a valid email'},
            3: {message: '"password" length must be at least 6 characters long'},
        }]
} */

  /* #swagger.responses[409] = {
              description: 'If the request sends the email field with an email that already exists, the returned result should be as shown below',
              schema: {
                  message: 'User already registered',
              }
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
