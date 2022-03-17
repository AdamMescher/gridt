import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ApolloProvider } from '@apollo/client';
import AsyncSelectInput from './index';
import { client } from '../../ApolloClient';

describe('AsyncSelectInput Component', () => {
  it('should render without errors', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput />
      </ApolloProvider>,
    );
  });
  it('should not render a label if neither name or label prop are provided', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput />
      </ApolloProvider>,
    );
    expect(screen.queryByText('label')).not.toBeInTheDocument();
  });
  it('should not render a label if only name prop is provided', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput name="frank" />
      </ApolloProvider>,
    );
    expect(screen.queryByText('frank')).not.toBeInTheDocument();
  });
  it('should render a label if only the label prop is provided', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput label="Island Records" />
      </ApolloProvider>,
    );
    expect(screen.queryByText('Island Records')).toBeInTheDocument();
  });
});
