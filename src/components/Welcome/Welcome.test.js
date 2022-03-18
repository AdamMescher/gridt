import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from './index';

describe('Welcome Component', () => {
  it('should render without errors', () => {
    const component = render(<Welcome />);
    expect(component.queryByText('Welcome')).toBeInTheDocument();
  });
});
