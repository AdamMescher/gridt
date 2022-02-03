import * as React from 'react';
import { useFloating, inline } from '@floating-ui/react-dom';
import Table from '../Table';
import StyledRiskRatioDescription from './styled';

const RiskRatioDescription = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Risk Ratio',
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
        interpretation:
          'The outcome is less likely for the target group vs. the comparison group',
      },
      {
        riskRatio: <div style={{ textAlign: 'center' }}>1</div>,
        interpretation:
          'The outcome is the same for the target group vs. the comparison group',
      },
      {
        riskRatio: <div style={{ textAlign: 'center' }}>{'>'}1</div>,
        interpretation:
          'The outcome is the more likely for the target group vs. the comparison group',
      },
    ],
    [],
  );
  const [style, setStyle] = React.useState({ display: 'none' });
  const { y, reference, floating, strategy } = useFloating({
    placement: 'bottom',
    middleware: [inline()],
  });

  return (
    <StyledRiskRatioDescription>
      <p>
        <span className="bold">Risk Ratio</span>: A risk ratio is a number
        greater than zero that describes the likelihood for one group to be at a
        higher risk for an{' '}
        <span
          class="word"
          ref={reference}
          onMouseEnter={(e) => {
            setStyle({
              top: y ?? '',
              position: strategy,
              display: 'block',
            });
          }}
          onMouseLeave={(e) => {
            setStyle({
              top: y ?? '',
              position: strategy,
              display: 'none',
            });
          }}
          onClick={(e) => {
            setStyle({
              top: y ?? '',
              position: strategy,
              display: 'block',
            });
          }}
          onBlur={() => {
            setStyle({
              top: y ?? '',
              position: strategy,
              display: 'none',
            });
          }}
        >
          outcome
        </span>{' '}
        than a comparison group.
        <div className="definition" ref={floating} style={style}>
          special education placement
        </div>
      </p>
      <Table columns={columns} data={data} />
    </StyledRiskRatioDescription>
  );
};

export default RiskRatioDescription;
