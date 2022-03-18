import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Graph from './index';

describe('Graph Component', () => {
  it('should render without errors', () => {
    const component = render(<Graph />);
    console.log(component.container.innerHTML);
  });
});
