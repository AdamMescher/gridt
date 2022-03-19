import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnorderedList from './index';

describe('UnorderedList Component', () => {
  it('should render without errors', () => {
    expect(
      render(
        <UnorderedList>
          <UnorderedList.Item>item one</UnorderedList.Item>
          <UnorderedList.Item>item two</UnorderedList.Item>
        </UnorderedList>,
      ).queryByTestId('unordered-list'),
    ).toBeInTheDocument();
  });
});
