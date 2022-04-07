import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HyperLink from './index';

describe('HyperLink Component', () => {
  it('should render without errors', () => {
    render(<HyperLink href="https://www.google.com/" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('should render href as link text if no children are provided', () => {
    const link = render(<HyperLink href="https://www.twitter.com/" />);
    expect(link.queryByText('https://www.twitter.com/')).toBeInTheDocument();
  });
  it('should render link with children if provided', () => {
    const link = render(
      <HyperLink href="https://www.espn.com/">
        this is some link text
      </HyperLink>,
    );
    expect(link.queryByText('this is some link text')).toBeInTheDocument();
  });
});
