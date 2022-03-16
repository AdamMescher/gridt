import * as React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import AsyncSelectInput from '../AsyncSelectInput';
import Spacer from '../Spacer';
import selectOptions from '../../utils/selectOptions.js';

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    cursor: 'pointer',
  }),
  control: (styles) => ({
    ...styles,
    cursor: 'pointer',
  }),
};

const Controls = ({
  comparison,
  gender,
  race,
  disability,
  setRace,
  setGender,
  setDisability,
  setSelectedSchool,
  setComparison,
  setGraphTitle,
}) => {
  return (
    <Wrapper>
      <GenderRaceDisabilitySelectWrapper>
        <SelectLabel htmlFor="gender">Select Gender</SelectLabel>
        <Select
          className="select"
          styles={customStyles}
          isClearable
          name="gender"
          inputId="gender"
          options={selectOptions.genderOptions}
          onChange={(option) => {
            setGender(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
        <Spacer size={6} />
        <SelectLabel htmlFor="race">Select Race</SelectLabel>
        <Select
          className="select"
          styles={customStyles}
          isClearable
          name="race"
          inputId="race"
          options={
            comparison === 'wh'
              ? selectOptions.raceOptionsWhiteComparison
              : selectOptions.raceOptions
          }
          onChange={(option) => {
            setRace(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
        <Spacer size={6} />
        <SelectLabel htmlFor="disability">Select Disability</SelectLabel>
        <Spacer size={2} />
        <Select
          className="select"
          styles={customStyles}
          isClearable
          name="disability"
          inputId="disability"
          options={selectOptions.disabilityOptions}
          onChange={(option) => {
            setDisability(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
      </GenderRaceDisabilitySelectWrapper>
      <SchoolSelectWrapper>
        <SelectLabel>Search School By Name</SelectLabel>
        <Spacer size={2} />
        <AsyncSelectInput
          styles={customStyles}
          setSelectedSchool={setSelectedSchool}
          gender={gender}
          race={race}
          disability={disability}
        />
        <Spacer size={6} />
        <RadioWrapper onChange={(event) => setComparison(event.target.value)}>
          <Details>
            <Summary>Comparison</Summary>
            <RadioWrapper>
              <Radio
                type="radio"
                value="pop"
                name="comparison"
                id="rest-of-population"
                defaultChecked
              />{' '}
              <RadioLabel htmlFor="rest-of-population">
                Rest of Population
              </RadioLabel>
            </RadioWrapper>
            <Spacer size={2} />
            <RadioWrapper>
              <Radio
                type="radio"
                value="wh"
                name="comparison"
                id="white-comparison"
              />{' '}
              <RadioLabel htmlFor="white-comparison">
                White Population
              </RadioLabel>
            </RadioWrapper>
          </Details>
        </RadioWrapper>
      </SchoolSelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: left;
  @media (max-width: 1280px) {
    padding-top: 15px;
    padding-left: 35px;
    padding-right: 35px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0;
  }
`;

const GenderRaceDisabilitySelectWrapper = styled.div`
  flex-grow: 1;
  padding-right: 25px;
  @media (max-width: 800px) {
    padding-right: 0;
  }
`;

const SchoolSelectWrapper = styled.div`
  flex-grow: 1;
  padding-left: 25px;
  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RadioWrapper = styled.div`
  align-self: flex-start;
`;

const SelectLabel = styled.label`
  font-weight: 700;
  display: inline-block;
  align-self: flex-start;
  margin-top: 6px;
  text-align: left;
  @media (max-width: 800px) {
    margin-top: 8px;
  }
`;

const Details = styled.details``;
const Summary = styled.summary`
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
const Radio = styled.input``;
const RadioLabel = styled.label`
  font-weight: 400;
`;

export default Controls;
