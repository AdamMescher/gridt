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
      RI_HI_F_POP
      RI_HI_M_POP
    }
  }
`;

const Histogram = () => {
  const { loading, data } = useQuery(ALL_SCHOOLS, {
    variables: { schoolsLimit: 500 },
  });
  if (loading) {
    return <Ring />;
  }
  if (data) {
    console.log({
      hello: data.schools.filter((school) => ({
        x: school.RR_HI_F_POP === 'number' && school.RR_HI_F_POP > 1,
      })),
    });
  }
  return (
    <StyledHistogram>
      <VictoryChart>
        <VictoryHistogram
          data={
            data
              ? data.schools.filter((school) => ({
                  x: school.RI_HI_F === 'number' && school.RI_HI_F > 1,
                }))
              : []
          }
        />
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
