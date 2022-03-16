import * as React from 'react';
import { render } from '@testing-library/react';
import Meta from './index';

describe('Meta Component', () => {
  it('should render without errors', () => {
    render(<Meta />);
  });
});
