import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from './index';

describe('Title component', () => {
  it('renders without crashing', () => {
    render(
      <Title color={'blue'}>
        <span>renders</span> without crashing
      </Title>,
      <Title level={1}>This is an h1</Title>,
      <Title level={2}>This is an h2</Title>,
      <Title level={3}>This is an h3</Title>,
      <Title level={4}>This is an h4</Title>,
      <Title level={5}>This is an h5</Title>,
      <Title level={6}>This is an h6</Title>,
    );
  });
});
