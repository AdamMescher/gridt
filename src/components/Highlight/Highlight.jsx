import * as React from 'react';
import styled from 'styled-components';

const COLORS = {
  slate: '#e2e8f0',
  darkSlate: '#1e293b;',
  fuchsia: '#f5d0fe',
  darkFuchsia: '#701a75',
  emerald: '#6ee7b7',
  darkEmerald: '#064e3b',
  orange: '#fdba74',
  darkOrange: '#7c2d12',
  sky: '#bae6fd',
  darkSky: '#0c4a6e',
};

const Highlight = ({ children, ...rest }) => (
  <StyledHighlight {...rest}>{children}</StyledHighlight>
);

const StyledHighlight = styled.span`
  --slate: ${COLORS.slate};
  --dark-slate: ${COLORS.darkSlate};
  --fuchsia: ${COLORS.fuchsia};
  --dark-fuchsia: ${COLORS.darkFuchsia};
  --emerald: ${COLORS.emerald};
  --dark-emerald: ${COLORS.darkEmerald};
  --orange: ${COLORS.orange};
  --dark-orange: ${COLORS.darkOrange};
  --sky: ${COLORS.sky};
  --dark-sky: ${COLORS.darkSky};
  display: inline-block;
  padding: 2px 4px;
  font-size: 18px;
  border-radius: 4px;
  color: ${({ color }) => setColor(color)};
  background-color: ${({ color }) => setBackground(color)};
`;

const setColor = (color) => {
  switch (color) {
    case 'fuchsia':
      return 'var(--dark-fuchsia)';
    case 'emerald':
      return 'var(--dark-emerald)';
    case 'orange':
      return 'var(--dark-orange)';
    case 'rose':
      return 'var(--dark-rose)';
    case 'sky':
      return 'var(--dark-sky)';
    case 'slate':
      return 'var(--dark-slate)';
    default:
      return 'var(--dark-slate)';
  }
};

const setBackground = (color) => {
  switch (color) {
    case 'fuchsia':
      return 'var(--fuchsia)';
    case 'emerald':
      return 'var(--emerald)';
    case 'orange':
      return 'var(--orange)';
    case 'rose':
      return 'var(--rose)';
    case 'sky':
      return 'var(--sky)';
    case 'slate':
      return 'var(--slate)';
    default:
      return 'var(--slate)';
  }
};

export default Highlight;
