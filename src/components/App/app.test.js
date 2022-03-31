import React from 'react';
import '@testing-library/jest-dom';
import { render, selectEvent } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import App from './index';

describe('App Component', () => {
  it.skip('renders without errors', () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
      <div id="root" />,
    );
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
