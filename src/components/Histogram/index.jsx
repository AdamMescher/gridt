/* eslint-disable */
import * as React from 'react';
import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryHistogram,
} from 'victory';
import { useLazyQuery, gql } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import StyledHistogram from './styled';

const Histogram = () => {
  const [race, setRace] = React.useState(null);
  const [gender, setGender] = React.useState(null);
  const generateQuery = (race, gender) => {
    return gql`
      query Query(
        $schoolsFilter: FilterFindManySchoolInput
        $schoolsLimit: Int
      ) {
        schools(filter: $schoolsFilter, limit: $schoolsLimit) {
          RR_${race}_${gender}_POP
        }
      }
    `;
  };
  const generateQueryOptions = (race, gender) => {
    return {
      variables: {
        schoolsLimit: -1,
        schoolsFilter: {
          _operators: {
            [`RR_${race}_${gender}_POP`]: {
              gt: 0,
            },
          },
        },
      },
    };
  };
  const handleButtonClick = (race, gender) => {
    setRaceAndGender(race, gender);
    useLazyQuery(
      generateQuery(race, gender),
      generateQueryOptions(race, gender),
    );
  };
  return (
    <StyledHistogram>
      <div className="all-buttons-container">
        <div className="two-button-container">
          <button onClick={() => handleButtonClick('AM', 'F')}>AM F</button>
          <button onClick={() => console.log('CLICKED!')}>AM M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => console.log('CLICKED!')}>AS F</button>
          <button onClick={() => console.log('CLICKED!')}>AS M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => console.log('CLICKED!')}>BL F</button>
          <button onClick={() => console.log('CLICKED!')}>BL M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => console.log('CLICKED!')}>HI F</button>
          <button onClick={() => console.log('CLICKED!')}>HI M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => console.log('CLICKED!')}>PI F</button>
          <button onClick={() => console.log('CLICKED!')}>PI M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => console.log('CLICKED!')}>TR F</button>
          <button onClick={() => console.log('CLICKED!')}>TR M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => console.log('CLICKED!')}>WH F</button>
          <button onClick={() => console.log('CLICKED!')}>WH M</button>
        </div>
      </div>
      {data?.schools ? (
        <VictoryChart>
          <VictoryLabel text="Number of Schools" />
          <VictoryHistogram
            data={data.schools.map((school) => ({
              x: school[`RR_${race}_${gender}_POP`],
            }))}
            bins={[
              0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8,
              3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4,
            ]}
          />
        </VictoryChart>
      ) : (
        <Ring />
      )}
    </StyledHistogram>
  );
};

export default Histogram;
