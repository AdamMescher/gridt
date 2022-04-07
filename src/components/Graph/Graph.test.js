import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Graph from './index';

describe('Graph Component', () => {
  it('should render without errors', () => {
    render(<Graph visible={true} showGraph={true} />);
    expect(screen.queryByTestId('histogram')).toBeInTheDocument();
  });
  it('should return null if visible is false, showGraph is false, and showError are false', () => {
    render(
      <Graph
        isLoading={false}
        visible={false}
        showGraph={false}
        showError={false}
      />,
    );
    expect(screen.queryByTestId('histogram')).not.toBeInTheDocument();
  });
  it('should return null if visible is true but showGraph and showError are false', () => {
    const { queryByTestId } = render(<Graph visible />);
    expect(queryByTestId('histogram')).not.toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(queryByTestId('graph-size-error-message')).not.toBeInTheDocument();
  });
  it('should not render loading, graph, or error message if no props passed', () => {
    const { queryByTestId } = render(<Graph />);
    expect(queryByTestId('histogram')).not.toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(queryByTestId('graph-size-error-message')).not.toBeInTheDocument();
  });
  it('should render loading animation if isLoading is true', () => {
    const { queryByTestId } = render(<Graph isLoading />);
    expect(queryByTestId('graph-loading')).toBeInTheDocument();
  });
  it('should render the loading animation only if isLoading is true and visible is true', () => {
    const { queryByTestId } = render(<Graph isLoading visible />);
    expect(queryByTestId('graph-loading')).toBeInTheDocument();
    expect(queryByTestId('histogram')).not.toBeInTheDocument();
    expect(queryByTestId('graph-size-error-message')).not.toBeInTheDocument();
  });
  it('should render the error message if visible is true and showError is true', () => {
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const { queryByTestId } = render(
      <Graph visible showError graphData={graphData} />,
    );
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(queryByTestId('histogram')).not.toBeInTheDocument();
    expect(queryByTestId('graph-size-error-message')).toBeInTheDocument();
  });
  it('should render the histogram if visible is true and showGraph is true', () => {
    const { queryByTestId } = render(<Graph visible showGraph />);
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(queryByTestId('graph-size-error-message')).not.toBeInTheDocument();
  });
  it('should render the histogram and not the error message if visible is true, showgraph is true, and showerror is true', () => {
    const { queryByTestId } = render(<Graph visible showGraph showError />);
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
    expect(queryByTestId('graph-size-error-message')).not.toBeInTheDocument();
  });
  it('should render the histogram with the risk ratio bar', () => {
    const isLoading = false;
    const showGraph = true;
    const showError = false;
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const disability = { value: 'AUT', label: 'Autism' };
    const comparison = 'pop';
    const selectedSchool = {
      RR_AM_F_POP_AUT: 1.068944478,
    };
    const graphTitle = 'AM F AUT pop';
    const { queryByTestId } = render(
      <Graph
        visible
        isLoading={isLoading}
        showGraph={showGraph}
        showError={showError}
        graphData={graphData}
        graphTitle={graphTitle}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        comparison={comparison}
      />,
    );
    expect(
      queryByTestId('graph-size-error-message-wrapper'),
    ).not.toBeInTheDocument();
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('risk-ratio-bar')).toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
  });
  it('should render histogram without risk ratio bar if race value is falsy', () => {
    const isLoading = false;
    const showGraph = true;
    const showError = false;
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = { value: 'F', label: 'Female' };
    const race = '';
    const disability = { value: 'AUT', label: 'Autism' };
    const comparison = 'pop';
    const selectedSchool = {
      RR_AM_F_POP_AUT: 1.068944478,
    };
    const { queryByTestId } = render(
      <Graph
        visible
        isLoading={isLoading}
        showGraph={showGraph}
        showError={showError}
        graphData={graphData}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        comparison={comparison}
      />,
    );
    expect(
      queryByTestId('graph-size-error-message-wrapper'),
    ).not.toBeInTheDocument();
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('risk-ratio-bar')).not.toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
  });
  it('should render histogram without risk ratio bar if gender value is falsy', () => {
    const isLoading = false;
    const showGraph = true;
    const showError = false;
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = '';
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const disability = { value: 'AUT', label: 'Autism' };
    const comparison = 'pop';
    const selectedSchool = {
      RR_AM_F_POP_AUT: 1.068944478,
    };
    const { queryByTestId } = render(
      <Graph
        visible
        isLoading={isLoading}
        showGraph={showGraph}
        showError={showError}
        graphData={graphData}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        comparison={comparison}
      />,
    );
    expect(
      queryByTestId('graph-size-error-message-wrapper'),
    ).not.toBeInTheDocument();
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('risk-ratio-bar')).not.toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
  });
  it('should render histogram without risk ratio bar if disability value is falsy', () => {
    const isLoading = false;
    const showGraph = true;
    const showError = false;
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const disability = '';
    const comparison = 'pop';
    const selectedSchool = {
      RR_AM_F_POP_AUT: 1.068944478,
    };
    const { queryByTestId } = render(
      <Graph
        visible
        isLoading={isLoading}
        showGraph={showGraph}
        showError={showError}
        graphData={graphData}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        comparison={comparison}
      />,
    );
    expect(
      queryByTestId('graph-size-error-message-wrapper'),
    ).not.toBeInTheDocument();
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('risk-ratio-bar')).not.toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
  });
  it('should render histogram without risk ratio bar if selectedSchool value is falsy', () => {
    const isLoading = false;
    const showGraph = true;
    const showError = false;
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const disability = { value: 'AUT', label: 'Autism' };
    const comparison = 'pop';
    const selectedSchool = null;
    const { queryByTestId } = render(
      <Graph
        visible
        isLoading={isLoading}
        showGraph={showGraph}
        showError={showError}
        graphData={graphData}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        comparison={comparison}
      />,
    );
    expect(
      queryByTestId('graph-size-error-message-wrapper'),
    ).not.toBeInTheDocument();
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('risk-ratio-bar')).not.toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
  });
  it('should render histogram without risk ratio bar if risk ratio value is null', () => {
    const isLoading = false;
    const showGraph = true;
    const showError = false;
    const graphData = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const disability = { value: 'AUT', label: 'Autism' };
    const comparison = 'pop';
    const selectedSchool = {
      RR_AM_F_POP_AUT: null,
    };
    const { queryByTestId } = render(
      <Graph
        visible
        isLoading={isLoading}
        showGraph={showGraph}
        showError={showError}
        graphData={graphData}
        gender={gender}
        race={race}
        disability={disability}
        selectedSchool={selectedSchool}
        comparison={comparison}
      />,
    );
    expect(
      queryByTestId('graph-size-error-message-wrapper'),
    ).not.toBeInTheDocument();
    expect(queryByTestId('histogram')).toBeInTheDocument();
    expect(queryByTestId('risk-ratio-bar')).not.toBeInTheDocument();
    expect(queryByTestId('graph-loading')).not.toBeInTheDocument();
  });
});
