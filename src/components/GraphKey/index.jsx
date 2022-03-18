import * as React from 'react';
import styled from 'styled-components';
import { Ripple } from 'react-awesome-spinners';
import Table from '../Table';

const GraphKey = ({ isLoading, visible }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Category Description',
        accessor: 'description',
      },
      {
        Header: 'Color',
        accessor: 'color',
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      {
        description: 'Major Underrepresentation ',
        color: (
          <CellWrapper>
            <LegendCircle color="cyan" />
          </CellWrapper>
        ),
      },
      {
        description: 'Underrepresentation',
        color: (
          <CellWrapper>
            <LegendCircle color="steelblue" />
          </CellWrapper>
        ),
      },
      {
        description: 'Proportionate',
        color: (
          <CellWrapper>
            <LegendCircle color="green" />
          </CellWrapper>
        ),
      },
      {
        description: 'Overrepresentation',
        color: (
          <CellWrapper>
            <LegendCircle color="lightcoral" />
          </CellWrapper>
        ),
      },
      {
        description: 'Major Overrepresentation',
        color: (
          <CellWrapper>
            <LegendCircle color="#8C001A" />
          </CellWrapper>
        ),
      },
    ],
    [],
  );
  return (
    <Wrapper>
      {isLoading ? (
        <div data-testid="graphkey-loading">
          <Ripple />
        </div>
      ) : visible ? (
        <Table columns={columns} data={data} />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
`;

const CellWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LegendCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: ${({ color }) => color};
`;

export default GraphKey;
