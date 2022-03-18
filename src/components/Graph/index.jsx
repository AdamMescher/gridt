import * as React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-awesome-spinners';
import Histogram from '../Histogram';
import GraphSizeErrorMessage from '../GraphSizeErrorMessage';
import Spacer from '../Spacer';

const Graph = ({
  isLoading,
  showGraph,
  showError,
  visible,
  graphData,
  gender,
  race,
  disability,
  selectedSchool,
}) => {
  if (isLoading) {
    return (
      <div data-testid="graph-loading">
        <Grid />
      </div>
    );
  }
  if (visible) {
    if (showGraph) {
      return (
        <Wrapper>
          <Histogram
            data={graphData}
            race={race}
            gender={gender}
            disability={disability}
            selectedSchool={selectedSchool}
          />
        </Wrapper>
      );
    }
    if (showError) {
      return (
        <ErrorWrapper>
          <Spacer size={12} />
          <GraphSizeErrorMessage graphData={graphData} />
        </ErrorWrapper>
      );
    }
  }
  return null;
};

const Wrapper = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  margin-left: 24px;
  @media (max-width: 1000px) {
    margin: 0;
  }
  background: blue;
`;
const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Graph;
