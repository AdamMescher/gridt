import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const fetch = require('node-fetch');

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:3333/graphql',
  fetch: (...args) => fetch(...args),
});

export const client = new ApolloClient({
  cache,
  link,
});
