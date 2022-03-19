import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Histogram from './index';

describe('Histogram Component', () => {
  it('should render without errors', () => {
    expect(
      render(<Histogram />).queryByTestId('histogram'),
    ).toBeInTheDocument();
  });
  it('should render a graph if data is passed', () => {
    const data = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    expect(
      render(<Histogram data={data} />).queryByTestId('histogram'),
    ).toBeInTheDocument();
  });
  it('should render a graph and a risk ratio bar if truthy values are passed for graphData and selectedSchool', () => {
    const data = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const disability = { value: 'AUT', label: 'Autism' };
    const selectedSchool = {
      SCH_NAME: 'school name',
      RR_AM_F_POP_AUT: 1.068944478,
    };
    const component = render(
      <Histogram
        data={data}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        riskRatioBarVisible
      />,
    );
    expect(component.queryByTestId('risk-ratio-bar')).toBeInTheDocument();
  });
});
