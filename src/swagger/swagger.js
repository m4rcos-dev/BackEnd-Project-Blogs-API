const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Blogs API',
    description: 'Documentation - Blogs API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = [
  '../routers/loginRoute.js',
];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
