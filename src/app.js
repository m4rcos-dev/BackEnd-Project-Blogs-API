const express = require('express');
const { loginRoute, userRoute, categoryRoute, postRoute } = require('./routers');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/', postRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

// start project
