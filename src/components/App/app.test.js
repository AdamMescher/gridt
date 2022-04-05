import React from 'react';
import '@testing-library/jest-dom';
import { render, selectEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import App from './index';

describe('App Component', () => {
  it('renders without errors', () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
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
  it.skip('can fetch msw mocked data', async () => {
    const { getByTestId, getByLabelText } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
    await selectEvent.select(getByLabelText('Select Gender'), 'Female');
    await selectEvent.select(
      getByLabelText('Select Race'),
      'American Indian / Alaskan Native',
    );
    expect(getByTestId('form')).toHaveFormValues({ gender: 'F', race: 'AM' });
  });
});
