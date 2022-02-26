import * as React from 'react';
import { Grid } from 'react-awesome-spinners';
import StyledGraph from './styled';
import Histogram from '../Histogram';

const GraphSizeErrorMessage = ({ graphData }) => (
  <div>
    <p>
      Sample size of {graphData.length} is not large enough to generate
      meaningful data for this subgroup.
    </p>
    <p>Please try another.</p>
  </div>
);

const Graph = ({
  isLoading,
  graphData,
  graphFloor,
  graphTitle,
  gender,
  race,
  disability,
  comparison,
  selectedSchool,
}) => {
  return (
    <StyledGraph>
      {isLoading ? (
        <Grid />
      ) : graphData?.length > graphFloor ? (
        <Histogram
          data={graphData}
          title={graphTitle}
          race={race}
          gender={gender}
          disability={disability}
          comparison={comparison}
          selectedSchool={selectedSchool}
        />
      ) : (
        <div className="graph-size-error-container">
          {race &&
          gender &&
          disability &&
          graphData?.length < graphFloor &&
          graphTitle ===
            `${race.value} ${gender.value} ${disability.value} ${comparison}` ? (
            <GraphSizeErrorMessage graphData={graphData} />
          ) : null}
        </div>
      )}
    </StyledGraph>
  );
};

export default Graph;
