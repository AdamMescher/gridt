import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Highlight from './index';

describe('Highlight Component', () => {
  it('should render without errors', () => {
    expect(
      render(<Highlight>component</Highlight>).queryByText('component'),
    ).toBeInTheDocument();
  });
  it('should render the proper font color and background color based on value passed to color prop', () => {
    function convertRange(value, oldMin, oldMax, newMin, newMax) {
      return (
        Math.round(
          (((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) +
            newMin) *
            10000,
        ) / 10000
      );
    }

    function hexToRgbFloat(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: convertRange(parseInt(result[1], 16), 0, 255, 0, 1),
            g: convertRange(parseInt(result[2], 16), 0, 255, 0, 1),
            b: convertRange(parseInt(result[3], 16), 0, 255, 0, 1),
          }
        : null;
    }
    const COLORS = {
      slate: hexToRgbFloat('#e2e8f0'),
      darkSlate: hexToRgbFloat('#1e293b'),
      fuchsia: hexToRgbFloat('#f5d0fe'),
      darkFuchsia: hexToRgbFloat('#701a75'),
      emerald: hexToRgbFloat('#6ee7b7'),
      darkEmerald: hexToRgbFloat('#064e3b'),
      orange: hexToRgbFloat('#fdba74'),
      darkOrange: hexToRgbFloat('#7c2d12'),
      sky: hexToRgbFloat('#bae6fd'),
      darkSky: hexToRgbFloat('#0c4a6e'),
    };
    const fushia = render(<Highlight color="fushia">fushia</Highlight>);
    const emerald = render(<Highlight color="emerald">emerald</Highlight>);
    const orange = render(<Highlight color="orange">orange</Highlight>);
    const rose = render(<Highlight color="rose">rose</Highlight>);
    const sky = render(<Highlight color="sky">sky</Highlight>);
    const slate = render(<Highlight color="slate">slate</Highlight>);
    const noValuePassed = render(<Highlight>default</Highlight>);

    expect(fushia.queryByText('fushia')).toHaveStyle({
      color: COLORS.darkFuchsia,
      backgroundColor: COLORS.fuchsia,
    });
    expect(emerald.queryByText('emerald')).toHaveStyle({
      color: COLORS.darkEmerald,
      backgroundColor: COLORS.emerald,
    });
    expect(orange.queryByText('orange')).toHaveStyle({
      color: COLORS.darkOrange,
      backgroundColor: COLORS.orange,
    });
    expect(rose.queryByText('rose')).toHaveStyle({
      color: COLORS.darkSlate,
      backgroundColor: COLORS.slate,
    });
    expect(sky.queryByText('sky')).toHaveStyle({
      color: COLORS.darkSky,
      backgroundColor: COLORS.sky,
    });
    expect(slate.queryByText('slate')).toHaveStyle({
      color: COLORS.darkSlate,
      backgroundColor: COLORS.slate,
    });
    expect(noValuePassed.queryByText('default')).toHaveStyle({
      color: COLORS.darkSlate,
      backgroundColor: COLORS.slate,
    });
  });
});
