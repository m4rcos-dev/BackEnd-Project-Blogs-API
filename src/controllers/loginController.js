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
              description: 'If the login was successful, the result returned should be as shown below, with a status',
              schema: {
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8',
              }
      } */

  /* #swagger.responses[400] = {
        description: `1- If the request does not have all the fields duly completed (there cannot be blank fields), the returned result should be as shown below
        </br>2 - If the request receives a wrong/non-existent email and password pair, the returned result should be as shown below`,
        schema: [{
            1: {message: 'Some required fields are missing'},
            2: {message: 'Invalid fields'}
        }]
} */

  const { email, password } = req.body;
  const { status, message, token } = await loginService.login(email, password);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

module.exports = { login };
