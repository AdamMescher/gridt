import * as React from 'react';
import styled from 'styled-components';
import Selection from '../Selection';
import AsyncSelectInput from '../AsyncSelectInput';
import Spacer from '../Spacer';
import selectOptions from '../../utils/selectOptions.js';

const customStyles = {
  option: (styles) => ({
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
  schoolState,
  setRace,
  setGender,
  setDisability,
  setSchoolState,
  setSelectedSchool,
  setComparison,
  setGraphTitle,
}) => {
  return (
    <Wrapper data-testid="controls-form">
      <GenderRaceDisabilitySelectWrapper>
        <Selection
          isRequired={true}
          styles={customStyles}
          isClearable
          label="Select Gender"
          name="gender"
          options={selectOptions.genderOptions}
          onChange={(option) => {
            setGender(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
        <Spacer size={4} />
        <Selection
          isClearable
          label="Select Race"
          name="race"
          styles={customStyles}
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
        <Spacer size={4} />
        <Selection
          styles={customStyles}
          isClearable
          label="Select Disability"
          name="disability"
          options={selectOptions.disabilityOptions}
          onChange={async (option) => {
            setDisability(option);
            setSelectedSchool(null);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
        <p style={{ fontWeight: 'bold', color: '#d97706' }}>
          Note: Please re-type school name if disability category is changed.
        </p>
      </GenderRaceDisabilitySelectWrapper>
      <SchoolSelectWrapper>
        <AsyncSelectInput
          name="selectschool"
          labelText="Select School by Name"
          styles={customStyles}
          schoolState={schoolState}
          setSelectedSchool={setSelectedSchool}
          gender={gender}
          race={race}
          disability={disability}
        />
        <p style={{ fontWeight: 'bold', color: '#d97706' }}>
          Note: Please re-type school name if disability category is changed.
        </p>
        <Spacer size={6} />
        <div>
          <Details>
            <Summary>Advanced School Search Filter</Summary>
            <Selection
              label="Filter Schools by State"
              name="state"
              onChange={(option) => {
                setSchoolState(option);
                if (!option) {
                  setGraphTitle(null);
                }
              }}
              options={selectOptions.stateOptions}
              styles={customStyles}
            />
          </Details>
        </div>
        <Spacer size={12} />
        <RadioWrapper onChange={(event) => setComparison(event.target.value)}>
          <Details>
            <Summary>
              Comparison
            </Summary>
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

const Wrapper = styled.form`
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

const RadioWrapper = styled.div`
  align-self: flex-start;
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
