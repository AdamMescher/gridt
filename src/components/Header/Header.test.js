import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

describe('Header Component', () => {
  it('should render without errors', () => {
    render(
      <Header>
        <h1>sample title</h1>
        <p>sample text</p>
      </Header>,
    );
    expect(screen.queryByText('sample title')).toBeInTheDocument();
    expect(screen.queryByText('sample text')).toBeInTheDocument();
  });
});
