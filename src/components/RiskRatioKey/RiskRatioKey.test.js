import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RiskRatioKey from './index';

describe('RiskRatioKey Component', () => {
  it('should render without errors', () => {
    render(<RiskRatioKey />);
  });
});
