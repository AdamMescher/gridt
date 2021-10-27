const dotenv = require('dotenv');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('./db');

const schema = require('./schema/index');

dotenv.config();

const startApolloServer = async () => {
  const app = express();

  const server = new ApolloServer({
    schema,
    cors: true,
    playground: process.env.NODE_ENV === 'development',
    introspection: true,
    tracing: true,
    path: '/',
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
        if (mongoose.connection.readyState > 0) {
          resolve();
        } else {
          reject();
        }
      }),
  });

  app.listen(
    {
      port: process.env.PORT || 3333,
    },
    () => {
      // eslint-disable-next-line no-console
      console.log(`
    🚀  Server is ready on ${process.env.PORT || 'http://localhost:3333/'}
    📭  Query at https://studio.apollographql.com/dev
  `);
    },
  );
};

startApolloServer();
