import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stats from './index';

describe('Stats Component', () => {
  it('should render without errors with no data passed', () => {
    const data = [{ x: 1 }, { x: 2 }, { x: 3 }];
    render(<Stats data={data} visible={true} />);
    expect(screen.queryByText('Standard Deviation')).toBeInTheDocument();
  });
  it('should not display loading animaton or table if isLoading is false and visible is false', () => {
    const component = render(<Stats visible={false} isLoading={false} />);
    expect(component.queryByRole('table')).not.toBeInTheDocument();
    expect(component.queryByTestId('stats-loading')).not.toBeInTheDocument();
  });
  it('should display loading animation is isLoading is true', () => {
    const component = render(<Stats isLoading />);
    expect(component.queryByRole('table')).not.toBeInTheDocument();
    expect(component.queryByTestId('stats-loading')).toBeInTheDocument();
  });
  it('should display loading animation if isLoading is true and visible is true', () => {
    const component = render(<Stats isLoading visible />);
    expect(component.queryByRole('table')).not.toBeInTheDocument();
    expect(component.queryByTestId('stats-loading')).toBeInTheDocument();
  });
  it('should display table if isLoading is false and visible is true', () => {
    const component = render(<Stats visible />);
    expect(component.queryByRole('table')).toBeInTheDocument();
    expect(component.queryByTestId('stats-loading')).not.toBeInTheDocument();
  });
  it('should display table with data if isLoading is false, visible is true, and graphData length is greater or equal to one', () => {
    const data = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const component = render(<Stats visible data={data} />);
    expect(component.queryByRole('table')).toBeInTheDocument();
    expect(component.queryByTestId('stats-loading')).not.toBeInTheDocument();
  });
});
