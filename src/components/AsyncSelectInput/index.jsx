/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useApolloClient, gql } from '@apollo/client';
import AsyncSelect from 'react-select/async';
import StyledAsyncSelectInput from './styled';

const SCHOOLS_BY_NAME = gql`
  query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
    schools(filter: $schoolsFilter, limit: $schoolsLimit) {
      SCH_NAME
      COMBOKEY
      LEA_NAME
      LEA_STATE
      RR_AM_F_POP
      RR_AM_M_POP
      RR_AS_F_POP
      RR_AS_M_POP
      RR_BL_F_POP
      RR_BL_M_POP
      RR_HI_F_POP
      RR_HI_M_POP
      RR_HP_F_POP
      RR_HP_M_POP
      RR_TR_F_POP
      RR_TR_M_POP
      RR_WH_F_POP
      RR_WH_M_POP
      RR_AM_F_WH_F
      RR_AM_M_WH_M
      RR_AS_F_WH_F
      RR_AS_M_WH_M
      RR_BL_F_WH_F
      RR_BL_M_WH_M
      RR_HI_F_WH_F
      RR_HI_M_WH_M
      RR_HP_F_WH_F
      RR_HP_M_WH_M
      RR_TR_F_WH_F
      RR_TR_M_WH_M
      RR_WH_F_WH_F
      RR_WH_M_WH_M
    }
  }
`;
const AsyncSelectInput = ({ setSelectedSchool, styles }) => {
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
          },
        },
      },
    });
    console.log({ schools: data.schools });
    return data
      ? data.schools.map((school) => ({
          label: `${school.SCH_NAME} | ${school.LEA_STATE} | ${school.LEA_NAME}`,
          value: school.COMBOKEY,
          ...school,
        }))
      : [];
  };
  return (
    <StyledAsyncSelectInput>
      <AsyncSelect
        isClearable
        styles={styles}
        loadOptions={fetchOptions}
        onInputChange={(inputValue) => setSearchTerm(inputValue)}
        onChange={(option) => setSelectedSchool(option)}
      />
    </StyledAsyncSelectInput>
  );
};

export default AsyncSelectInput;
