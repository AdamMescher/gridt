import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Graph from './index';

describe('Graph Component', () => {
  it('should render without errors', () => {
    render(
      <Graph
        isLoading={false}
        visible={false}
        showGraph={false}
        showError={false}
      />,
    );
  });
  it('should not render loading, graph, or error message if no props passed', () => {
    const component = render(<Graph />);
    expect(component.queryByTestId('histogram')).not.toBeInTheDocument();
    expect(component.queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(
      component.queryByTestId('graph-size-error-message'),
    ).not.toBeInTheDocument();
  });
  it('should render loading animation if isLoading is true', () => {
    const component = render(<Graph isLoading />);
    expect(component.queryByTestId('graph-loading')).toBeInTheDocument();
  });
  it('should render the loading animation only if isLoading is true and visible is true', () => {
    const component = render(<Graph isLoading visible />);
    expect(component.queryByTestId('graph-loading')).toBeInTheDocument();
    expect(component.queryByTestId('histogram')).not.toBeInTheDocument();
    expect(
      component.queryByTestId('graph-size-error-message'),
    ).not.toBeInTheDocument();
  });
  it('should render the histogram if visible is true and showGraph is true', () => {
    const component = render(<Graph visible showGraph />);
    expect(component.queryByTestId('histogram')).toBeInTheDocument();
    expect(component.queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(
      component.queryByTestId('graph-size-error-message'),
    ).not.toBeInTheDocument();
  });
  it('should render the histogram and not the error message if visible is true, showgraph is true, and showerror is true', () => {
    const component = render(<Graph visible showGraph showError />);
    expect(component.queryByTestId('histogram')).toBeInTheDocument();
    expect(component.queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(
      component.queryByTestId('graph-size-error-message'),
    ).not.toBeInTheDocument();
  });
  it('should render the error message if visible is true and showerror is true', () => {
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const disability = { value: 'AUT', label: 'Autism' };
    const selectedSchool = {
      SCH_NAME: 'school name',
      RR_AM_F_POP_AUT: 1.068944478,
    };
    const comparison = 'pop';
    const component = render(
      <Graph
        visible
        isLoading={false}
        showGraph={false}
        showError={true}
        graphData={graphData}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        comparison={comparison}
      />,
    );
    expect(
      component.queryByTestId('graph-size-error-message-wrapper'),
    ).toBeInTheDocument();
    expect(component.queryByTestId('histogram')).not.toBeInTheDocument();
    expect(component.queryByTestId('graph-loading')).not.toBeInTheDocument();
  });
  it('should return null if visible is true but showGraph and showError are false', () => {
    const component = render(<Graph visible />);
    expect(component.queryByTestId('histogram')).not.toBeInTheDocument();
    expect(component.queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(
      component.queryByTestId('graph-size-error-message'),
    ).not.toBeInTheDocument();
  });
});
