import * as React from 'react';
import { render } from '@testing-library/react';

import GlobalStyle from './index';

describe('GlobalStyle Component', () => {
  it('should render without errors', () => {
    render(<GlobalStyle />);
  });
});
