import * as React from 'react';
import StyledRiskRatioKey from './styled';
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'cyan',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Underrepresentation',
        riskRatioRange: <div style={{ textAlign: 'center' }}>0.31 - 0.6</div>,
        color: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'steelblue',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Proportionate',
        riskRatioRange: <div style={{ textAlign: 'center' }}>0.61 - 2.0</div>,
        color: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'green',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Overrepresentation',
        riskRatioRange: <div style={{ textAlign: 'center' }}>2.1 - 3.5</div>,
        color: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'lightcoral',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Major Overrepresentation',
        riskRatioRange: <div style={{ textAlign: 'center' }}>{'>'} 3.6</div>,
        color: (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                height: '20px',
                width: '20px',
                background: '#8C001A',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
    ],
    [],
  );
  return (
    <StyledRiskRatioKey>
      <Table columns={columns} data={data} />
      <p className="description">
        <span className="bold">Underrepresentation</span>: the target group is{' '}
        <em>less</em> likely to experience that outcome.
      </p>
      <p className="description">
        <span className="bold">Overrepresentation</span>: the target group is{' '}
        <em>more</em> likely to experience the outcome.
      </p>
    </StyledRiskRatioKey>
  );
};

export default RiskRatioKey;
