const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Express API for GRIDT',
    description: 'This is a description',
    contact: {
      name: 'GRIDT',
      url: 'mescher.io',
      email: 'test@mail.com',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3333/api/v1',
      description: 'Development Server',
    },
  ],
  paths: {
    '/genders': {},
    '/races': {},
  },
};

const swaggerOptions = {
  swaggerDefinition,
  apis: [`${__dirname}/server/routes/genders/index.js`],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
