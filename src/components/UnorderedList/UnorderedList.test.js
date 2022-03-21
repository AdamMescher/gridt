import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnorderedList from './index';

describe('UnorderedList Component', () => {
  it('should render without errors', () => {
    const { queryByTestId, queryAllByRole } = render(
      <UnorderedList>
        <UnorderedList.Item>item one</UnorderedList.Item>
        <UnorderedList.Item>item two</UnorderedList.Item>
      </UnorderedList>,
    );
    const items = queryAllByRole('listitem');
    expect(queryByTestId('unordered-list')).toBeInTheDocument();
    expect(items.length).toBe(2);
  });
});
