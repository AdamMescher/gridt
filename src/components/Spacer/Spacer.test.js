import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Spacer from './index';

describe('Spacer Component', () => {
  it('renders without errors with no axis provided', () => {
    render(<Spacer size={2} />);
    expect(screen.queryByTestId('spacer')).toBeInTheDocument();
  });
  it('renders spacer with vertical axis', () => {
    render(<Spacer size={4} axis="vertical" />);
    expect(screen.queryByTestId('spacer')).toBeInTheDocument();
    expect(screen.queryByTestId('spacer')).toHaveStyle({
      height: '4px',
      width: '1px',
    });
  });
  it('renders spacer with horizontal axis', () => {
    render(<Spacer size={4} axis="horizontal" />);
    expect(screen.queryByTestId('spacer')).toBeInTheDocument();
    expect(screen.queryByTestId('spacer')).toHaveStyle({
      height: '1px',
      width: '4px',
    });
  });
});
