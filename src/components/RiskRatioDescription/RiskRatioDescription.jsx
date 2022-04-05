import * as React from 'react';
import Table from '../Table';
import styled from 'styled-components';

const RiskRatioDescription = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: (
          <TableHighlight color="emerald">
            <Bold>Risk Ratio</Bold>
          </TableHighlight>
        ),
        accessor: 'riskRatio',
      },
      {
        Header: <TableHighlight>Interpretation</TableHighlight>,
        accessor: 'interpretation',
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      {
        riskRatio: <Center>{'<'}1</Center>,
        interpretation: (
          <CellText>
            The <TableHighlight color="orange">outcome</TableHighlight> is less
            likely for the target group vs. the comparison group
          </CellText>
        ),
      },
      {
        riskRatio: <Center>1</Center>,
        interpretation: (
          <CellText>
            The <TableHighlight color="orange">outcome</TableHighlight> is the
            same for the target group vs. the comparison group
          </CellText>
        ),
      },
      {
        riskRatio: <Center>{'>'}1</Center>,
        interpretation: (
          <CellText>
            The <TableHighlight color="orange">outcome</TableHighlight> is the
            more likely for the target group vs. the comparison group
          </CellText>
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
  :root {
    --emerald: #6ee7b7;
    --orange: #fdba74;
    --slate: #e2e8f0;
    --dark-emerald: #064e3b;
    --dark-orange: #7c2d12;
    --dark-slate: #1e293b;
  }
  font-size: 14px;
`;

const Center = styled.div`
  text-align: center;
`;

const CellText = styled.p`
  align-self: flex-start;
  margin-right: 100px;
  line-height: 1.5;
`;

const TableHighlight = styled.span`
  border-radius: 4px;
  padding: 2px 6px;
  color: ${({ color }) => setColor(color)};
  background: ${({ color }) => setBackground(color)};
`;

const Bold = styled.span`
  font-weight: bold;
`;

const setColor = (color) => {
  switch (color) {
    case 'orange':
      return 'var(--dark-orange)';
    case 'emerald':
      return 'var(--dark-emerald)';
    default:
      return 'var(--dark-slate)';
  }
};

const setBackground = (color) => {
  switch (color) {
    case 'orange':
      return 'var(--orange)';
    case 'emerald':
      return 'var(--emerald)';
    default:
      return 'var(--slate)';
  }
};

export default RiskRatioDescription;
