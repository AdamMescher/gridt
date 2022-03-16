import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from './index';

describe('Title component', () => {
  it('renders without crashing', () => {
    render(
      <Title>
        <span>renders</span> without crashing
      </Title>,
    );
  });
  it('defaults to rendering an h1 tag', () => {
    render(<Title>Default Title</Title>);
    const title = screen.getByText('Default Title');
    console.log({ title });
  });
});
