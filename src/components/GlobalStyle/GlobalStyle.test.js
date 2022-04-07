import * as React from 'react';
import { render, screen } from '@testing-library/react';

import GlobalStyle from './index';

describe('GlobalStyle Component', () => {
  it('should render without errors', () => {
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
    render(
      <>
        <GlobalStyle />
        <h1 style={{ color: 'var(--rose)' }}>sample title</h1>
      </>,
    );
    expect(screen.queryByText('sample title')).toBeInTheDocument();
    expect(screen.queryByText('sample title')).toHaveStyle({
      color: hexToRgbFloat('#fda4af'),
    });
  });
});
