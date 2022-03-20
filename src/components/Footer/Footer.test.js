import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './index';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    expect(render(<Footer />).queryByRole('contentinfo')).toBeInTheDocument();
  });
});
