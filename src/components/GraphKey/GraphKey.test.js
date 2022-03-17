import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GraphKey from './index';

describe('GraphKey Component', () => {
  it('should render without errors', () => {
    render(<GraphKey />);
  });
});
