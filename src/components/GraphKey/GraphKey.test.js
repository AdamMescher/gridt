import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GraphKey from './index';

describe('GraphKey Component', () => {
  it('should render without errors', () => {
    render(<GraphKey />);
  });
  it('should not render loading animation or table if isLoading is false and visible is false', () => {
    const component = render(<GraphKey visible={false} />);
    expect(component.queryByRole('table')).not.toBeInTheDocument();
    expect(component.queryByTestId('graphkey-loading')).not.toBeInTheDocument();
  });
  it('should display loading animation if isLoading prop is true', () => {
    const component = render(<GraphKey isLoading />);
    expect(component.queryByRole('table')).not.toBeInTheDocument();
    expect(component.queryByTestId('graphkey-loading')).toBeInTheDocument();
  });
  it('should display loading animation if isLoading is true and visible is true', () => {
    const component = render(<GraphKey isLoading visible />);
    expect(component.queryByRole('table')).not.toBeInTheDocument();
    expect(component.queryByTestId('graphkey-loading')).toBeInTheDocument();
  });
  it('should display table if isLoading is false and visible is true', () => {
    const component = render(<GraphKey visible />);
    expect(component.queryByRole('table')).toBeInTheDocument();
    expect(component.queryByTestId('graphkey-loading')).not.toBeInTheDocument();
  });
});
