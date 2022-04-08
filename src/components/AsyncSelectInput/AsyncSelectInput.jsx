/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from 'styled-components';
import { useApolloClient, gql } from '@apollo/client';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import Spacer from '../Spacer';
import setTypeAndQueryFromDisability from '../../utils/setTypeAndQueryFromDisability';

const SingleValue = (props) => (
  <components.SingleValue {...props}>
    {props.data.schoolSelected}
  </components.SingleValue>
);

const AsyncSelectInput = ({
  labelText,
  name,
  setSelectedSchool,
  styles,
  disability,
  schoolState,
}) => {
  const client = useApolloClient();
  const [inputValue, setInputValue] = React.useState('');
  const fetchOptions = async () => {
    const typeAndQuery = setTypeAndQueryFromDisability(disability);
    const { type, query } = typeAndQuery;
    const variables = {
      limit: schoolState ? -1 : 100,
      filter: {
        _operators: {
          [`${type === 'schools' ? 'SCH_NAME' : 'SCHOOL_NAME'}`]: {
            regex: `/${inputValue}/i`,
          },
          LEA_STATE: {
            regex: `/${schoolState ? schoolState.value : '.*'}/i`,
          },
        },
      },
    };
    const { data } = await client.query({
      query,
      variables,
    });
    return data?.[type]?.map((school) => ({
      label: (
        <SchoolOption>
          <LabelSchoolName>
            {type === 'schools' ? school.SCH_NAME : school.SCHOOL_NAME}
          </LabelSchoolName>
          <LabelSchoolStateAndDistrict>
            District: {school.LEA_NAME}, State: {school.LEA_STATE}
          </LabelSchoolStateAndDistrict>
        </SchoolOption>
      ),
      schoolSelected: (
        <SchoolSelected>
          {type === 'schools' ? school.SCH_NAME : school.SCHOOL_NAME}
          <SchoolSelectedStateAndDistrict>
            {school.LEA_NAME} {school.LEA_STATE}
          </SchoolSelectedStateAndDistrict>
        </SchoolSelected>
      ),
      value: school.COMBOKEY,
      ...school,
    }));
  };
  return (
    <Wrapper
      htmlFor={name || labelText}
      data-testid={`${name || labelText}-async-select-form`}
    >
      {labelText ? (
        <>
          <SelectLabel htmlFor={name || labelText}>{labelText}</SelectLabel>
          <Spacer size={2} />
        </>
      ) : null}
      <AsyncSelect
        className="something"
        data-testid="asyncSelect"
        isClearable
        name={name}
        labelText={labelText}
        inputId={name}
        styles={styles}
        components={{ SingleValue }}
        loadOptions={fetchOptions}
        onInputChange={(inputValue) => setInputValue(inputValue)}
        onChange={(option) => setSelectedSchool(option)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const SelectLabel = styled.label`
  font-weight: 700;
  display: inline-block;
  align-self: flex-start;
  text-align: left;
`;
const SchoolOption = styled.div``;
const LabelSchoolName = styled.p``;
const LabelSchoolStateAndDistrict = styled.p`
  color: darkgray;
  font-size: 11px;
`;
const SchoolSelected = styled.div``;
const SchoolSelectedStateAndDistrict = styled.span`
  margin-left: 5px;
  color: darkgray;
  font-size: 11px;
`;

export default AsyncSelectInput;
