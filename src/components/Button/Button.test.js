import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button Component', () => {
  it('should render without errors', () => {
    render(<Button />);
  });
});
