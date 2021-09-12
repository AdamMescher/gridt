import * as React from 'react';
import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryHistogram,
} from 'victory';
import { useQuery, gql } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import StyledHistogram from './styled';

const Histogram = ({ gender, race }) => {
  console.log({ gender, race });
  // const ALL_SCHOOLS = gql`
  //   query Query($schoolsLimit: Int) {
  //     schools(limit: $schoolsLimit) {
  //       SCH_NAME
  //       COMBOKEY
  //       RR_HI_F_POP
  //     }
  //   }
  // `;
  const SCHOOLS_RR_HI_M_POP = gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        SCH_NAME
        COMBOKEY
        RR_HI_M_POP
      }
    }
  `;

  const { loading, data } = useQuery(SCHOOLS_RR_HI_M_POP, {
    variables: {
      schoolsLimit: 50,
      schoolsFilter: {
        _operators: {
          RR_HI_M_POP: {
            gt: 0,
          },
        },
      },
    },
  });
  if (loading) {
    return <Ring />;
  }
  return (
    <StyledHistogram>
      <VictoryChart>
        <VictoryLabel text="Number of Schools" />
        <VictoryBar
          data={[{ x: 1, y: 100 }]}
          style={{ data: { fill: 'yellow' } }}
        />
        <VictoryHistogram
          data={
            data
              ? data.schools.map((school) => ({ x: school.RR_HI_M_POP }))
              : []
          }
        />
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
