/* eslint-disable */
import * as React from 'react';
import { useLazyQuery, gql } from '@apollo/client';
// import { Ring } from 'react-awesome-spinners';
import StyledHistogram from './styled';
import queries from '../../utils/queries';
import generateFill from '../../utils/generateFill';

const Histogram = ({ gender, race, disability, selectedSchool }) => {
  const fetchSchools = async () => {
    const query = queries[`SCHOOLS_${race.value}_${gender.value}_QUERY`];
    const { data, loading } = await useQuery({
      query,
      variables: {
        schoolsLimit: -1,
        schoolsFilter: {
          _operators: {
            [`RR_${race.value}_${gender.value}_POP`]: {
              gt: 0,
            },
          },
        },
      },
    });
    if (data) {
      const key = Object?.keys(data?.schools[0])[0];
      const schools = data.schools.map((school) => ({ x: school[key] }));
      return schools;
    }
    return [];
  };
  return (
    <StyledHistogram>
      {gender?.value && race?.value ? (
        disability?.value ? (
          selectedSchool ? (
            <div>
              gender: yes, race: yes, disabilty: yes, selectedSchool: yes
            </div>
          ) : (
            <div>
              gender: yes, race: yes, disability: yes, selectedSchool: no
            </div>
          )
        ) : selectedSchool ? (
          <div>gender: yes, race: yes, disabilty: no, selectedSchool: yes</div>
        ) : (
          <div>gender: yes, race: yes, disability: no, selectedSchool: no</div>
        )
      ) : (
        <div>none</div>
      )}
    </StyledHistogram>
  );
};

export default Histogram;
