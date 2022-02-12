/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useApolloClient, gql } from '@apollo/client';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import StyledAsyncSelectInput from './styled';
import asyncSelectQueries from '../../utils/queries/asyncSelect/asyncSelectQueries';

const SingleValue = (props) => (
  <components.SingleValue {...props}>
    {props.data.selectedSchoolLabel}
  </components.SingleValue>
);

const AsyncSelectInput = ({
  setSelectedSchool,
  styles,
  race,
  gender,
  disability,
}) => {
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
    }
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
      : (variables = variables =
          {
            limit: 10,
            filter: {
              _operators: {
                SCHOOL_NAME: {
                  regex: `/${searchTerm}/i`,
                },
              },
            },
          });
    console.log({ type, query, variables });
    const { data } = await client.query({
      query,
      variables,
    });
    console.log({ data });
    return data
      ? data[type].map((school) => ({
          label: (
            <div>
              <p>{type === 'schools' ? school.SCH_NAME : school.SCHOOL_NAME}</p>
              <p style={{ color: 'darkgray', fontSize: '11px' }}>
                District: {school.LEA_NAME}, State: {school.LEA_STATE}
              </p>
            </div>
          ),
          selectedSchoolLabel: (
            <p>
              {type === 'schools' ? school.SCH_NAME : school.SCHOOL_NAME}
              <span
                style={{
                  marginLeft: '5px',
                  color: 'darkgray',
                  fontSize: '11px',
                }}
              >
                {school.LEA_NAME} {school.LEA_STATE}
              </span>
            </p>
          ),
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
        components={{ SingleValue }}
        loadOptions={fetchOptions}
        onInputChange={(inputValue) => setSearchTerm(inputValue)}
        onChange={(option) => setSelectedSchool(option)}
      />
    </StyledAsyncSelectInput>
  );
};

export default AsyncSelectInput;
