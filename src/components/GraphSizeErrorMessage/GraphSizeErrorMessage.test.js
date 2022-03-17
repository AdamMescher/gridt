import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GraphSizeErrorMessage from './index';

describe('GraphSizeErrorMessage Component', () => {
  it('should render without errors', () => {
    render(<GraphSizeErrorMessage />);
  });
});
