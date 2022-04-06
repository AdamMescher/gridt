import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhatNow from './index';

describe('WhatNow Component', () => {
  it('should render without errors', () => {
    render(<WhatNow />);
    expect(screen.queryByText('What Now?')).toBeInTheDocument();
  });
});
