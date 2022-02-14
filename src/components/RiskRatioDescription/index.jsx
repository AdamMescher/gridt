import * as React from 'react';
import Table from '../Table';
import StyledRiskRatioDescription from './styled';

const RiskRatioDescription = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: <span className="risk">Risk Ratio</span>,
        accessor: 'riskRatio',
      },
      {
        Header: 'Interpretation',
        accessor: 'interpretation',
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      {
        riskRatio: <div style={{ textAlign: 'center' }}>{'<'}1</div>,
        interpretation: (
          <p>
            The <span className="outcome">outcome</span> is less likely for the
            target group vs. the comparison group
          </p>
        ),
      },
      {
        riskRatio: <div style={{ textAlign: 'center' }}>1</div>,
        interpretation: (
          <p>
            The <span className="outcome">outcome</span> is the same for the
            target group vs. the comparison group
          </p>
        ),
      },
      {
        riskRatio: <div style={{ textAlign: 'center' }}>{'>'}1</div>,
        interpretation: (
          <p>
            The <span className="outcome">outcome</span> is the more likely for
            the target group vs. the comparison group
          </p>
        ),
      },
    ],
    [],
  );

  return (
    <StyledRiskRatioDescription>
      <Table columns={columns} data={data} />
    </StyledRiskRatioDescription>
  );
};

export default RiskRatioDescription;
