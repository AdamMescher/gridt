import * as React from 'react';
import styled from 'styled-components';
import Controls from '../Controls';
import Graph from '../Graph';
import Stats from '../Stats';
import GraphKey from '../GraphKey';
import Button from '../Button';
import Title from '../Title';
import Spacer from '../Spacer';

const DataVisualization = ({
  comparison,
  race,
  gender,
  disability,
  setRace,
  setGender,
  setDisability,
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
  return (
    <Wrapper>
      <Title level={2}>Local Patterns of Disproportionality</Title>
      <Spacer size={12} />
      <Controls
        comparison={comparison}
        race={race}
        gender={gender}
        disability={disability}
        setRace={setRace}
        setGender={setGender}
        setDisability={setDisability}
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
          visible={
            race &&
            gender &&
            disability &&
            graphTitle &&
            graphData?.length >= graphFloor
          }
          race={race}
          gender={gender}
          disability={disability}
          graphTitle={graphTitle}
          graphData={graphData}
          graphFloor={graphFloor}
        />
        <Graph
          isLoading={isLoading}
          visible={true}
          showGraph={
            race &&
            gender &&
            disability &&
            graphTitle &&
            graphData?.length >= graphFloor
          }
          showError={
            race &&
            gender &&
            disability &&
            graphTitle &&
            graphData?.length < graphFloor
          }
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
          visible={
            race &&
            gender &&
            disability &&
            graphTitle &&
            graphData?.length >= graphFloor
          }
        />
      </GraphAndTables>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
const GraphAndTables = styled.div`
  display: flex;
  justify-content: center;
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

export default DataVisualization;
