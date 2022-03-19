/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from 'styled-components';
import { useApolloClient, gql } from '@apollo/client';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import Spacer from '../Spacer';
import asyncSelectQueries from '../../utils/queries/asyncSelect/asyncSelectQueries';

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
}) => {
  console.log({ asyncSelectQueries });
  const client = useApolloClient();
  const [searchTerm, setSearchTerm] = React.useState('');
  const fetchOptions = async () => {
    let query;
    let variables;
    let type;
    switch (disability.value) {
      case 'AUT':
        type = 'autisms';
        query = asyncSelectQueries.AUTISMS_BY_NAME_ASYNCSELECT;
        break;
      case 'DB':
        type = 'deafblindnesses';
        query = asyncSelectQueries.DEAF_BLINDNESSES_BY_NAME_ASNYCSELECT;
        break;
      case 'DD':
        type = 'developmentaldelays';
        query = asyncSelectQueries.DEVELOPMENTAL_DELAYS_BY_NAME_ASYNCSELECT;
        break;
      case 'HI':
        type = 'hearingimpairments';
        query = asyncSelectQueries.HEARING_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
        break;
      case 'EMN':
        type = 'emotionaldisturbances';
        query = asyncSelectQueries.EMOTIONAL_DISTURBANCES_BY_NAME_ASYNCSELECT;
        break;
      case 'MD':
        type = 'multipledisabilities';
        query = asyncSelectQueries.MULTIPLE_DISABILITIES_BY_NAME_ASYNCSELECT;
        break;
      case 'MR':
        type = 'intellectualdisabilities';
        query =
          asyncSelectQueries.INTELLECTUAL_DISABILITIES_BY_NAME_ASYNCSELECT;
        break;
      case 'OI':
        type = 'orthopedicimpairments';
        query = asyncSelectQueries.ORTHOPEDIC_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
        break;
      case 'OHI':
        type = 'otherhealthimpairments';
        query = asyncSelectQueries.OTHER_HEALTH_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
        break;
      case 'SLD':
        type = 'specificlearningdisabilities';
        query =
          asyncSelectQueries.SPECIFIC_LEARNING_DISABILITIES_BY_NAME_ASYNCSELECT;
        break;
      case 'SLI':
        type = 'speechlanguageimpairments';
        query =
          asyncSelectQueries.SPEECH_LANGUAGE_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
        break;
      case 'TBI':
        type = 'traumaticbraininjuries';
        query = asyncSelectQueries.TRAUMATIC_BRAIN_INJURIES_BY_NAME_ASYNCSELECT;
        break;
      case 'VI':
        type = 'visualimpairments';
        query = asyncSelectQueries.VISUAL_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
        break;
      default:
        type = 'schools';
        query = asyncSelectQueries.SCHOOLS_BY_NAME_ASNYCSELECT;
        break;
    }
    console.log('QQ: ', query);
    type === 'schools'
      ? (variables = {
          limit: 10,
          filter: {
            _operators: {
              SCH_NAME: {
                regex: `/${searchTerm}/i`,
              },
            },
          },
        })
      : (variables = {
          limit: 10,
          filter: {
            _operators: {
              SCHOOL_NAME: {
                regex: `/${searchTerm}/i`,
              },
            },
          },
        });
    const { data } = await client.query({
      query,
      variables,
    });
    return data
      ? data[type].map((school) => ({
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
        }))
      : [];
  };
  return (
    <Wrapper>
      {labelText ? (
        <>
          <SelectLabel htmlFor={name || labelText}>{labelText}</SelectLabel>
          <Spacer size={2} />
        </>
      ) : null}
      <AsyncSelect
        isClearable
        name={name}
        labelText={labelText}
        styles={styles}
        components={{ SingleValue }}
        loadOptions={fetchOptions}
        onInputChange={(inputValue) => setSearchTerm(inputValue)}
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
