import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../Table';

describe('Table Component', () => {
  it('should render without errors', () => {
    const columns = [
      { Header: 'Header One', accessor: 'headerOne' },
      { Header: 'Header Two', accessor: 'headerTwo' },
    ];
    const data = [
      { headerOne: 1, headerTwo: 2 },
      { headerOne: 3, headerTwo: 4 },
    ];
    render(<Table data={data} columns={columns} />);
    expect(screen.queryByText('Header One')).toBeInTheDocument();
    expect(screen.queryByText('Header Two')).toBeInTheDocument();
  });
});
