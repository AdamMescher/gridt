import * as React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });
});
