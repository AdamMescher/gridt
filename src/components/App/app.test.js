import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './index';

describe('App Component', () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
  });
  test('renders without crashing', () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
  });
});
