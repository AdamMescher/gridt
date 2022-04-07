import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RiskRatioDescription from './index';

describe('RiskRatioDescription Component', () => {
  it('should render without errors', () => {
    render(<RiskRatioDescription />);
    expect(screen.queryByText('Interpretation')).toBeInTheDocument();
  });
});
