import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import DataVisualization from './index';

describe('DataVisualization Component', () => {
  it('should render without errors', () => {
    render(
      <ApolloProvider client={client}>
        <DataVisualization />
      </ApolloProvider>,
    );
  });
});
