import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import App from './index';

describe('App Component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
    expect(queryByText('Welcome')).toBeInTheDocument();
  });
  it('shows the disclosure modal on first load', () => {
    const { queryByText } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
    expect(
      queryByText(
        'Welcome to Gender and Race Intersectional Disproportionality-Tool',
      ),
    ).toBeInTheDocument();
  });
  it('should close the modal if user clicks the modal CTA', () => {
    const { queryByText } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
    expect(
      queryByText(
        'Welcome to Gender and Race Intersectional Disproportionality-Tool',
      ),
    ).toBeInTheDocument();
    userEvent.click(queryByText('I Understand'));
    expect(
      queryByText(
        'Welcome to Gender and Race Intersectional Disproportionality-Tool',
      ),
    ).not.toBeInTheDocument();
  });
});
