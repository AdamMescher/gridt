import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GraphSizeErrorMessage from './index';

describe('GraphSizeErrorMessage Component', () => {
  it('should render without errors and appear in the DOM', () => {
    expect(
      render(<GraphSizeErrorMessage />).queryByTestId(
        'graph-size-error-message',
      ),
    ).toBeInTheDocument();
  });
});
