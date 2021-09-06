import * as React from 'react';
import { VictoryChart, VictoryHistogram } from 'victory';
import { useQuery, gql } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import StyledHistogram from './styled';

const ALL_SCHOOLS = gql`
  query Query($schoolsLimit: Int) {
    schools(limit: $schoolsLimit) {
      SCH_NAME
      TOT_ENR
    }
  }
`;

const Histogram = () => {
  const { loading, data } = useQuery(ALL_SCHOOLS, {
    variables: { schoolsLimit: 10 },
  });
  if (loading) {
    return <Ring />;
  }
  localStorage.setItem('schools', data.schools);
  return (
    <StyledHistogram>
      <VictoryChart>
        <VictoryHistogram
          bins={[
            0, 50, 100, 150, 200, 250, 300, 450, 500, 600, 700, 800, 900, 1000,
            1200, 1400, 1600, 2000,
          ]}
          data={data.schools.map((school) => ({
            x: school.TOT_ENR,
          }))}
        />
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
