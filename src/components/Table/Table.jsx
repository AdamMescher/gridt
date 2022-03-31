import * as React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Table = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups?.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows?.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  border-collapse: collapse;
  td,
  th {
    padding: 0.5rem;
    border: 1px solid #ccc;
    white-space: nowrap;
  }
  tbody tr:nth-child(odd) {
    background: #eee;
  }
  @media (max-width: 1280px) {
    font-size: 0.8rem;
  }
`;

export default Table;
