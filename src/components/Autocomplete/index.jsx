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
  const [findSchools, { loading, data }] = useLazyQuery(SCHOOLS_BY_NAME, {
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
  });
  const items = data?.schools || [];
  const findSchoolsDebounced = debounce(findSchools, 350);
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      setSchoolSearchTerm(inputValue);
      findSchoolsDebounced({
        searchTerm: inputValue,
      });
    },
    onSelectedItemChange({ selectedItem }) {
      console.log('FIRED!');
      console.log(selectedItem);
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
          {isOpen &&
            items.map((item, index) => (
              <li
                {...getItemProps({ item })}
                key={item.COMBOKEY}
                highlighted={index === highlightedIndex}
              >
                {item.SCH_NAME}
              </li>
            ))}
          {isOpen && !items.length && !loading && (
            <li>Sorry, no schools found with {inputValue} in the name</li>
          )}
        </ul>
      </div>
    </StyledAutoComplete>
  );
};

export default Autocomplete;
