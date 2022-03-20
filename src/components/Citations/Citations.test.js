import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Citations from '../Citations';

describe('Citations component', () => {
  it('should render without errors', () => {
    const component = render(<Citations>citations</Citations>);
    expect(component.queryByText('citations')).toBeInTheDocument();
  });
  it('should render list item compound components and their children', () => {
    const component = render(
      <Citations>
        <Citations.Item>
          <Citations.Citation>a citation</Citations.Citation>
        </Citations.Item>
        <Citations.Item>
          <Citations.Citation>another one</Citations.Citation>
        </Citations.Item>
      </Citations>,
    );
    expect(component.queryByText('a citation')).toBeInTheDocument();
    expect(component.queryByText('another one')).toBeInTheDocument();
  });
});
