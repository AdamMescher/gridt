import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Selection from './index';

describe('Selection', () => {
  it('renders without errors', () => {
    render(
      <Selection />,
      <Selection name="one" />,
      <Selection name="frank" label="label maker" />,
      <Selection label="Billy Joel" />,
    );
  });
  it('should not render a label if neither name or label prop are provided', () => {
    render(<Selection />);
    expect(screen.queryByText('label')).not.toBeInTheDocument();
  });
  it('should not render a label if only name prop is provided', () => {
    render(<Selection name="frank" />);
    expect(screen.queryByText('frank')).not.toBeInTheDocument();
  });
  it('should render a label if only the label prop is provided', () => {
    render(<Selection label="Sony Music Entertainment" />);
    expect(screen.queryByText('Sony Music Entertainment')).toBeInTheDocument();
  });
});
