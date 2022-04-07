import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GraphKey from './index';

describe('GraphKey Component', () => {
  it('should render without errors', () => {
    render(<GraphKey visible />);
    expect(screen.queryByRole('table')).toBeInTheDocument();
  });
  it('should not render loading animation or table if isLoading is false and visible is false', () => {
    render(<GraphKey visible={false} />);
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.queryByTestId('graphkey-loading')).not.toBeInTheDocument();
  });
  it('should display loading animation if isLoading prop is true', () => {
    render(<GraphKey isLoading />);
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.queryByTestId('graphkey-loading')).toBeInTheDocument();
  });
  it('should display loading animation if isLoading is true and visible is true', () => {
    render(<GraphKey isLoading visible />);
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.queryByTestId('graphkey-loading')).toBeInTheDocument();
  });
  it('should display table if isLoading is false and visible is true', () => {
    render(<GraphKey visible />);
    expect(screen.queryByRole('table')).toBeInTheDocument();
    expect(screen.queryByTestId('graphkey-loading')).not.toBeInTheDocument();
  });
});
