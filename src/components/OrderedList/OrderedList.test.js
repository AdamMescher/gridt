import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderedList from './index';

describe('OrderedList component', () => {
  it('should render without errors', () => {
    const { queryByTestId, queryAllByRole } = render(
      <OrderedList>
        <OrderedList.Item>item 1</OrderedList.Item>
        <OrderedList.Item>item 2</OrderedList.Item>
      </OrderedList>,
    );
    const items = queryAllByRole('listitem');
    expect(queryByTestId('ordered-list')).toBeInTheDocument();
    expect(items.length).toBe(2);
  });
});
