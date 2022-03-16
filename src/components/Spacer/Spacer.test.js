import * as React from 'react';
import { render } from '@testing-library/react';
import Spacer from './index';

describe('Spacer Component', () => {
  it('renders without errors', () => {
    render(<Spacer size={2} axis="vertical" />);
    render(<Spacer size={8} axis="horizontal" />);
  });
});
