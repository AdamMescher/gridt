import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/App';

const cache = new InMemoryCache();
const uri =
  process.env.NODE_ENV === 'production'
    ? 'https://gridt-apollo.herokuapp.com/'
    : 'http://localhost:3333/';

const client = new ApolloClient({
  uri,
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
