import * as React from 'react';
import { VictoryChart, VictoryHistogram } from 'victory';
import { useQuery, gql } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import StyledHistogram from './styled';

const ALL_SCHOOLS = gql`
  query Query($schoolsLimit: Int) {
    schools(limit: $schoolsLimit) {
      SCH_NAME
      COMBOKEY
      RI_HI_F
      RI_HI_M
    }
  }
`;

const Histogram = () => {
  const { loading, data } = useQuery(ALL_SCHOOLS, {
    variables: { schoolsLimit: 100 },
  });
  if (loading) {
    return <Ring />;
  }
  localStorage.setItem('schools', data.schools);
  return (
    <StyledHistogram>
      <VictoryChart>
        <VictoryHistogram
          data={data.schools.map((school) => ({
            x: school.RI_HI_F,
          }))}
        />
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
