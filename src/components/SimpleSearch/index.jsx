import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import debounce from 'lodash.debounce';
import SimpleSchoolCard from '../SimpleSchoolCard';
import StyledSimpleSearch from './styled';

const SCHOOLS_BY_NAME = gql`
  query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
    schools(filter: $schoolsFilter, limit: $schoolsLimit) {
      SCH_NAME
      COMBOKEY
    }
  }
`;

const SimpleSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [findSchools, { loading, data }] = useLazyQuery(SCHOOLS_BY_NAME, {
    fetchPolicy: 'no-cache',
    variables: {
      schoolsLimit: 2,
      schoolsFilter: {
        _operators: {
          SCH_NAME: {
            regex: `/${searchTerm}/i`,
          },
        },
      },
    },
  });
  const findSchoolsDebounced = debounce(findSchools, 350);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <StyledSimpleSearch>
      <input
        type="text"
        onChange={async (event) => {
          event.preventDefault();
          setSearchTerm(event.target.value);
          await findSchoolsDebounced();
        }}
        setSelectedSchool={setSelectedSchool()}
      />
      <ul>
        {data &&
          data.schools &&
          data.schools.map((school) => (
            <SimpleSchoolCard key={school.COMBOKEY} school={school} />
          ))}
      </ul>
    </StyledSimpleSearch>
  );
};

export default SimpleSearch;
