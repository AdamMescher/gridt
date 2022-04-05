import * as React from 'react';
import styled from 'styled-components';
import Controls from '../Controls';
import Graph from '../Graph';
import Stats from '../Stats';
import GraphKey from '../GraphKey';
import RiskRatioMessage from '../RiskRatioMessage';
import Button from '../Button';
import Title from '../Title';
import Spacer from '../Spacer';

const DataVisualization = ({
  comparison,
  race,
  gender,
  disability,
  schoolState,
  setRace,
  setGender,
  setDisability,
  setSchoolState,
  setSelectedSchool,
  setComparison,
  setGraphTitle,
  fetchSchools,
  isLoading,
  selectedSchool,
  graphFloor,
  graphData,
  graphTitle,
}) => {
  const handleClick = async () => {
    if (race && gender && disability) {
      setGraphTitle(
        `${race.value} ${gender.value} ${disability.value} ${comparison}`,
      );
    }
    await fetchSchools();
  };
  const graphContainerVisible = () =>
    race && gender && disability && graphTitle && graphData;
  const tablesVisible = () =>
    race &&
    gender &&
    disability &&
    graphTitle &&
    graphData?.length >= graphFloor;
  const riskRatioInfoMessageVisible = () =>
    race &&
    gender &&
    disability &&
    selectedSchool !== null &&
    graphTitle ===
      `${race.value} ${gender.value} ${disability.value} ${comparison}`;
  const shouldShowGraph = () =>
    race &&
    gender &&
    disability &&
    graphTitle &&
    graphData?.length >= graphFloor;
  const shouldShowGraphErrorMessage = () =>
    race &&
    gender &&
    disability &&
    graphTitle &&
    graphTitle ===
      `${race.value} ${gender.value} ${disability.value} ${comparison}` &&
    graphData?.length < graphFloor;

  return (
    <Wrapper>
      <Title level={2}>Local Patterns of Disproportionality</Title>
      <Spacer size={12} />
      <Controls
        comparison={comparison}
        race={race}
        gender={gender}
        disability={disability}
        schoolState={schoolState}
        setRace={setRace}
        setGender={setGender}
        setDisability={setDisability}
        setSchoolState={setSchoolState}
        setSelectedSchool={setSelectedSchool}
        setComparison={setComparison}
        setGraphTitle={setGraphTitle}
        fetchSchools={fetchSchools}
      />
      <Spacer size={10} />
      <GenerateGraphButtonWrapper>
        <Button disabled={isLoading} onClick={handleClick}>
          Generate Graph
        </Button>
      </GenerateGraphButtonWrapper>
      <Spacer size={10} />
      <GraphAndTables>
        <GraphKey
          isLoading={isLoading}
          visible={tablesVisible()}
          race={race}
          gender={gender}
          disability={disability}
          graphTitle={graphTitle}
          graphData={graphData}
          graphFloor={graphFloor}
        />
        <Graph
          isLoading={isLoading}
          visible={graphContainerVisible()}
          showGraph={shouldShowGraph()}
          showError={shouldShowGraphErrorMessage()}
          graphData={graphData}
          graphFloor={graphFloor}
          graphTitle={graphTitle}
          gender={gender}
          race={race}
          disability={disability}
          comparison={comparison}
          selectedSchool={selectedSchool}
        />
        <Stats
          data={graphData}
          isLoading={isLoading}
          visible={tablesVisible()}
        />
      </GraphAndTables>
      <Spacer size={10} />
      <RiskRatioMessageWrapper>
        <RiskRatioMessage
          isLoading={isLoading}
          visible={riskRatioInfoMessageVisible()}
          gender={gender}
          race={race}
          disability={disability}
          selectedSchool={selectedSchool}
          comparison={comparison}
        />
      </RiskRatioMessageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
const GraphAndTables = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const GenerateGraphButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RiskRatioMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default DataVisualization;
