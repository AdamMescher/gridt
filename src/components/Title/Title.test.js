import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from './index';

describe('Title component', () => {
  it('renders without crashing', () => {
    render(<Title>render this</Title>);
    expect(screen.queryByText('render this')).toBeInTheDocument();
  });
  it('should render default level of 1 if no level prop is passed', () => {
    render(<Title>render this</Title>);
    expect(document.querySelector('h1')).toBeInTheDocument();
  });
  it('should render h3 if value of 3 is passed to level prop', () => {
    render(<Title level={3}>render this</Title>);
    expect(document.querySelector('h3')).toBeInTheDocument();
  });
  it('should not pass font-size property if value is not passed to size prop', () => {
    render(<Title>render this</Title>);
    expect(document.querySelector('h1').style.fontSize).toBeFalsy();
  });
  it('should have font-size style property if value is passed to size prop', () => {
    render(<Title size="2rem">render this</Title>);
    expect(document.querySelector('h1')).toHaveStyle({ fontSize: '2rem' });
  });
  it('should see default color and text-align values of "inherit" if no value passed', () => {
    render(<Title>hello</Title>);
    expect(document.querySelector('h1')).toHaveStyle({
      color: 'inherit',
      textAlign: 'inherit',
    });
  });
  it('should have color and text-align values if values passed to props', () => {
    render(
      <Title color="red" align="center">
        hello
      </Title>,
    );
    const title = document.querySelector('h1');
    expect(title).toHaveStyle({
      color: 'red',
      textAlign: 'center',
    });
  });
});
