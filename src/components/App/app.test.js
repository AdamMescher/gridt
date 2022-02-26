import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import App from './index';

afterEach(cleanup);

describe('App Component', () => {
  it('renders without errors', () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
  });
  // it('can fetch msw mocked data', async () => {
  //   const { getByTestId, getByLabelText } = render(
  //     <ApolloProvider client={client}>
  //       <App />
  //     </ApolloProvider>,
  //   );
  //   await selectEvent.select(getByLabelText('Select Gender'), 'Female');
  //   await selectEvent.select(
  //     getByLabelText('Select Race'),
  //     'American Indian / Alaskan Native',
  //   );
  //   expect(getByTestId('form')).toHaveFormValues({ gender: 'F', race: 'AM' });
  // });
});
