import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RiskRatioKey from './index';

describe('RiskRatioKey Component', () => {
  it('should render without errors', () => {
    render(<RiskRatioKey />);
    expect(screen.queryByText('Risk Ratio Range')).toBeInTheDocument();
  });
});
