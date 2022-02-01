import * as React from 'react';

import { useFloating, shift, inline } from '@floating-ui/react-dom';
// import StyledRiskRatioDescription from './styled';

const RiskRatioDescription = () => {
  const [style, setStyle] = React.useState({ display: 'none' });
  const { x, y, reference, floating, strategy } = useFloating({
    placement: 'top',
    middleware: [shift(), inline()],
  });

  const hideTooltip = () => {};

  return (
    <>
      <button
        ref={reference}
        onMouseEnter={(e) => {
          setStyle({ display: 'block' });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: 'none' });
        }}
      >
        Button
      </button>
      <div ref={floating} style={style}>
        Tooltip
      </div>
    </>
  );
};

export default RiskRatioDescription;
