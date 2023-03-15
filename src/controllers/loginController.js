const loginService = require('../services/loginService');

const login = async (req, res) => {
  // #swagger.tags = ['Login']
  /*  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'You need to enter a valid email and password',
        schema: {
            $email: 'lewishamilton@gmail.com',
            $password: '123456'
        }
} */

  /* #swagger.responses[200] = {
              description: 'Token',
      } */

  /* #swagger.responses[400] = {
        description: `Some required fields are missing.
        <br>Invalid fields.`,
} */

  const { email, password } = req.body;
  const { status, message, token } = await loginService.login(email, password);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

module.exports = { login };
