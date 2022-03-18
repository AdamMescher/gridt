import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stats from './index';

describe('Stats Component', () => {
  it('should render without errors with no data passed', () => {
    const component = render(<Stats />);
    expect(component.queryByRole('table')).toBeInTheDocument();
  });
  it('should display with data passed', () => {
    const data = [
      { x: 1.310548801 },
      { x: 0.961038961 },
      { x: 0.638095238 },
      { x: 0.415865385 },
      { x: 0.598214286 },
      { x: 5.1 },
    ];
    const component = render(<Stats data={data} />);
    expect(component.queryByRole('table')).toBeInTheDocument();
  });
});
