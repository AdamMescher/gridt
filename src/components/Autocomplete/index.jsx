import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import StyledAutoComplete from './styled';

const SCHOOLS_BY_NAME = gql`
  query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
    schools(filter: $schoolsFilter, limit: $schoolsLimit) {
      SCH_NAME
      COMBOKEY
    }
  }
`;

const Autocomplete = () => {
  resetIdCounter();
  const [schoolSearchTerm, setSchoolSearchTerm] = React.useState('');
  const [findSchools, { loading, data, error }] = useLazyQuery(
    SCHOOLS_BY_NAME,
    {
      fetchPolicy: 'no-cache',
      variables: {
        schoolsLimit: 10,
        schoolsFilter: {
          _operators: {
            SCH_NAME: {
              regex: `/${schoolSearchTerm}/i`,
            },
          },
        },
      },
    },
  );
  const schools = data?.schools || [];
  console.log({ loading, data, error });
  const findSchoolsDebounced = debounce(findSchools, 350);
  const { inputValue, getMenuProps, getInputProps, getComboboxProps } =
    useCombobox({
      items: [],
      onInputValueChange() {
        setSchoolSearchTerm(inputValue);
        findSchoolsDebounced({
          searchTerm: inputValue,
        });
      },
      onSelectedItemChange() {
        console.log('Selected item change!');
      },
    });
  return (
    <StyledAutoComplete>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for a school',
            id: 'search',
            className: loading ? 'loading' : '',
          })}
        />
        <ul {...getMenuProps()}>
          {schools.map((school) => (
            <li>{school.SCH_NAME}</li>
          ))}
        </ul>
      </div>
    </StyledAutoComplete>
  );
};

export default Autocomplete;
