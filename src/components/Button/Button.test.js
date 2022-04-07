import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button Component', () => {
  it('should render without errors', () => {
    render(<Button>this is a button</Button>);
    expect(screen.queryByText('this is a button')).toBeInTheDocument();
  });
});
