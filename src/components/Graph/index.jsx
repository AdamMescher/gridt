import * as React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-awesome-spinners';
import Histogram from '../Histogram';
import GraphSizeErrorMessage from '../GraphSizeErrorMessage';
import Spacer from '../Spacer';
import generateSelectedSchoolRiskRatioProperty from '../../utils/generateSelectedSchoolRiskRatioProperty';

const Graph = ({
  isLoading,
  showGraph,
  showError,
  visible,
  graphData,
  gender,
  race,
  disability,
  comparison,
  selectedSchool,
  graphTitle,
}) => {
  const riskRatioBarVisible = () =>
    (showGraph &&
      race &&
      gender &&
      disability &&
      graphTitle ===
        `${race.value} ${gender.value} ${disability.value} ${comparison}` &&
      selectedSchool &&
      selectedSchool?.[
        generateSelectedSchoolRiskRatioProperty(
          race,
          gender,
          disability,
          comparison,
        )
      ]) ||
    selectedSchool?.[
      generateSelectedSchoolRiskRatioProperty(
        race,
        gender,
        disability,
        comparison,
      )
    ] === 0;
  if (isLoading) {
    return (
      <LoadingWrapper data-testid="graph-loading">
        <Grid />
      </LoadingWrapper>
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
            comparison={comparison}
            selectedSchool={selectedSchool}
            riskRatioBarVisible={riskRatioBarVisible()}
          />
        </Wrapper>
      );
    }
    if (showError) {
      return (
        <ErrorWrapper data-testid="graph-size-error-message-wrapper">
          <Spacer size={12} />
          <GraphSizeErrorMessage graphData={graphData} />
        </ErrorWrapper>
      );
    }
    return null;
  }
  return null;
};
const LoadingWrapper = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    margin: 0;
  }
`;
const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Graph;
