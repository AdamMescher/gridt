import * as React from 'react';
import styled from 'styled-components';
import Table from '../Table';

const RiskRatioKey = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Category Description',
        accessor: 'description',
      },
      {
        Header: 'Risk Ratio Range',
        accessor: 'riskRatioRange',
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
        riskRatioRange: <div style={{ textAlign: 'center' }}>≤ 0.3</div>,
        color: (
          <CellWrapper>
            <LegendCircle color="cyan" />
          </CellWrapper>
        ),
      },
      {
        description: 'Underrepresentation',
        riskRatioRange: <div style={{ textAlign: 'center' }}>0.31 - 0.6</div>,
        color: (
          <CellWrapper>
            <LegendCircle color="steelblue" />
          </CellWrapper>
        ),
      },
      {
        description: 'Proportionate',
        riskRatioRange: <div style={{ textAlign: 'center' }}>0.61 - 2.0</div>,
        color: (
          <CellWrapper>
            <LegendCircle color="green" />
          </CellWrapper>
        ),
      },
      {
        description: 'Overrepresentation',
        riskRatioRange: <div style={{ textAlign: 'center' }}>2.1 - 3.5</div>,
        color: (
          <CellWrapper>
            <LegendCircle color="lightcoral" />
          </CellWrapper>
        ),
      },
      {
        description: 'Major Overrepresentation',
        riskRatioRange: <div style={{ textAlign: 'center' }}>{'>'} 3.6</div>,
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
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
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

export default RiskRatioKey;
