import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Histogram from './index';

describe('Histogram Component', () => {
  it('should render without errors', () => {
    expect(
      render(<Histogram />).queryByTestId('histogram'),
    ).toBeInTheDocument();
  });
});
