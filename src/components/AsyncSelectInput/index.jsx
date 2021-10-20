/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useApolloClient, gql } from '@apollo/client';
import AsyncSelect from 'react-select/async';
import StyledAsyncSelectInput from './styled';

const AsyncSelectInput = ({ setSelectedSchool, race, gender }) => {
  const SCHOOLS_BY_NAME = gql`
  query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
    schools(filter: $schoolsFilter, limit: $schoolsLimit) {
      SCH_NAME
      COMBOKEY
      RR_${race.value}_${gender.value}_POP
    }
  }
`;
  const client = useApolloClient();
  const [searchTerm, setSearchTerm] = React.useState('');
  const fetchOptions = async () => {
    const { data } = await client.query({
      query: SCHOOLS_BY_NAME,
      variables: {
        schoolsLimit: 10,
        schoolsFilter: {
          _operators: {
            SCH_NAME: {
              regex: `/${searchTerm}/i`,
            },
            [`RR_${race.value}_${gender.value}_POP`]: {
              gt: 0,
            },
          },
        },
      },
    });
    return data
      ? data.schools.map((school) => ({
          label: school.SCH_NAME,
          value: school.COMBOKEY,
          ...school,
        }))
      : [];
  };
  return (
    <StyledAsyncSelectInput>
      <AsyncSelect
        isClearable
        loadOptions={fetchOptions}
        onInputChange={(inputValue) => setSearchTerm(inputValue)}
        onChange={(option) => setSelectedSchool(option)}
      />
    </StyledAsyncSelectInput>
  );
};

export default AsyncSelectInput;
