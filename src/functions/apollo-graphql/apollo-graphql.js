const { ApolloServer } = require('apollo-server-lambda');
const schema = require('../../../server/schema');
require('../../../server/db');

const server = new ApolloServer({
  schema,
  introspection: true,
  tracing: true,
});

const handler = server.createHandler();

module.exports = { handler };
