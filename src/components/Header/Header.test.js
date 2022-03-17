import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

describe('Header Component', () => {
  it('should render without errors', () => {
    render(<Header />);
  });
});
