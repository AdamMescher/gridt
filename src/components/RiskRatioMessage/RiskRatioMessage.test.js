import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RiskRatioMessage from './index';
import selectOptions from '../../utils/selectOptions';

describe('RiskRatioMessage Component', () => {
  it('should render without errors', () => {
    render(<RiskRatioMessage visible={true} />);
    expect(
      screen.queryByText(/does not have enough students/),
    ).toBeInTheDocument();
  });
  it('should not render if isLoading is true', () => {
    const { queryByText } = render(<RiskRatioMessage isLoading />);
    expect(queryByText(/The Risk Ratio for/i)).not.toBeInTheDocument();
    expect(
      queryByText(/does not have enough students/i),
    ).not.toBeInTheDocument();
  });
  it('should not render if isLoading is true and visible is true', () => {
    const { queryByText } = render(
      <RiskRatioMessage isLoading visible={true} />,
    );
    expect(queryByText(/The Risk Ratio for/i)).not.toBeInTheDocument();
    expect(
      queryByText(/does not have enough students/i),
    ).not.toBeInTheDocument();
  });
  it('should not render if isLoading is true, visible is true, and gender, race, disability, and comparision values are truthy', () => {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const race =
      selectOptions.raceOptions[
        getRandomIntInclusive(0, selectOptions.raceOptions.length - 1)
      ];
    const gender =
      selectOptions.genderOptions[
        getRandomIntInclusive(0, selectOptions.genderOptions.length - 1)
      ];
    const disability =
      selectOptions.disabilityOptions[
        getRandomIntInclusive(0, selectOptions.disabilityOptions.length - 1)
      ];
    const comparison = 'pop;';
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading
        visible={true}
        race={race}
        gender={gender}
        disability={disability}
        comparison={comparison}
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).not.toBeInTheDocument();
    expect(
      queryByText(/does not have enough students/i),
    ).not.toBeInTheDocument();
  });
  it('should render insufficient data message if isLoading is false, visible is true, and risk ratio for selectedSchool is null or undefined', () => {
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading={false}
        visible={true}
        race={{ value: 'AM', label: 'American Indian / Alaskan Native' }}
        gender={{ value: 'F', label: 'Female' }}
        disability={{ value: 'MR', label: 'Intellectual Disability' }}
        comparison="pop"
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).not.toBeInTheDocument();
    expect(queryByText(/does not have enough students/i)).toBeInTheDocument();
  });
  it('should render risk ratio message for given school if isLoading is falsy, visible is true, and risk ratio for selectedSchool is an integer greater than or equal to zero', () => {
    const selectedSchool = {
      COMBOKEY: '390441801101',
      LEA_NAME: 'Kettering City School District',
      LEA_STATE: 'OH',
      RR_AM_F_WH_F_MR: null,
      RR_AM_M_POP_MR: null,
      RR_AM_M_WH_M_MR: null,
      RR_AS_F_POP_MR: 0,
      RR_AS_F_WH_F_MR: 0,
      RR_AS_M_POP_MR: 0,
      RR_AS_M_WH_M_MR: null,
      RR_BL_F_POP_MR: 0,
      RR_BL_F_WH_F_MR: 0,
      RR_BL_M_POP_MR: 0,
      RR_BL_M_WH_M_MR: null,
      RR_HI_F_POP_MR: 0,
      RR_HI_F_WH_F_MR: 0,
      RR_HI_M_POP_MR: 0,
      RR_HI_M_WH_M_MR: null,
      RR_HP_F_POP_MR: null,
      RR_HP_F_WH_F_MR: null,
      RR_HP_M_POP_MR: null,
      RR_HP_M_WH_M_MR: null,
      RR_TR_F_POP_MR: 0,
      RR_TR_F_WH_F_MR: 0,
      RR_TR_M_POP_MR: 0,
      RR_TR_M_WH_M_MR: null,
      RR_WH_F_POP_MR: null,
      RR_WH_M_POP_MR: 0,
      SCHOOL_NAME: 'Indian Riffle Elementary School',
    };
    const race = { value: 'AS', label: 'Asian' };
    const gender = { value: 'F', label: 'Female' };
    const disability = { value: 'MR', label: 'Intellectual Disability' };
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading={false}
        visible={true}
        race={race}
        gender={gender}
        disability={disability}
        comparison="pop"
        selectedSchool={selectedSchool}
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).toBeInTheDocument();
    expect(
      queryByText(/does not have enough students/i),
    ).not.toBeInTheDocument();
  });
  it('should render risk ratio message for given school if isLoading is falsy, visible is true, copmarison is "pop", disability value is not TOTAL, and risk ratio for selectedSchool is an integer greater than or equal to zero', () => {
    const selectedSchool = {
      COMBOKEY: '390441801101',
      LEA_NAME: 'Kettering City School District',
      LEA_STATE: 'OH',
      RR_AM_F_WH_F_MR: null,
      RR_AM_M_POP_MR: null,
      RR_AM_M_WH_M_MR: null,
      RR_AS_F_POP_MR: 0,
      RR_AS_F_WH_F_MR: 0,
      RR_AS_M_POP_MR: 0,
      RR_AS_M_WH_M_MR: null,
      RR_BL_F_POP_MR: 0,
      RR_BL_F_WH_F_MR: 0,
      RR_BL_M_POP_MR: 0,
      RR_BL_M_WH_M_MR: null,
      RR_HI_F_POP_MR: 0,
      RR_HI_F_WH_F_MR: 0,
      RR_HI_M_POP_MR: 0,
      RR_HI_M_WH_M_MR: null,
      RR_HP_F_POP_MR: null,
      RR_HP_F_WH_F_MR: null,
      RR_HP_M_POP_MR: null,
      RR_HP_M_WH_M_MR: null,
      RR_TR_F_POP_MR: 0,
      RR_TR_F_WH_F_MR: 0,
      RR_TR_M_POP_MR: 0,
      RR_TR_M_WH_M_MR: null,
      RR_WH_F_POP_MR: null,
      RR_WH_M_POP_MR: 0,
      SCHOOL_NAME: 'Indian Riffle Elementary School',
    };
    const race = { value: 'AS', label: 'Asian' };
    const gender = { value: 'F', label: 'Female' };
    const disability = { value: 'MR', label: 'Intellectual Disability' };
    const comparison = 'pop';
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading={false}
        visible={true}
        race={race}
        gender={gender}
        disability={disability}
        comparison={comparison}
        selectedSchool={selectedSchool}
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).toBeInTheDocument();
    expect(
      queryByText(/does not have enough students/i),
    ).not.toBeInTheDocument();
  });
  it('should render risk ratio message for given school if isLoading is falsy, visible is true, comparison is "wh", disability value is not TOTAL, and risk ratio for selectedSchool is an integer greater than or equal to zero', () => {
    const selectedSchool = {
      COMBOKEY: '390441801101',
      LEA_NAME: 'Kettering City School District',
      LEA_STATE: 'OH',
      RR_AM_F_WH_F_MR: null,
      RR_AM_M_POP_MR: null,
      RR_AM_M_WH_M_MR: null,
      RR_AS_F_POP_MR: 0,
      RR_AS_F_WH_F_MR: 0,
      RR_AS_M_POP_MR: 0,
      RR_AS_M_WH_M_MR: null,
      RR_BL_F_POP_MR: 0,
      RR_BL_F_WH_F_MR: 0,
      RR_BL_M_POP_MR: 0,
      RR_BL_M_WH_M_MR: null,
      RR_HI_F_POP_MR: 0,
      RR_HI_F_WH_F_MR: 0,
      RR_HI_M_POP_MR: 0,
      RR_HI_M_WH_M_MR: null,
      RR_HP_F_POP_MR: null,
      RR_HP_F_WH_F_MR: null,
      RR_HP_M_POP_MR: null,
      RR_HP_M_WH_M_MR: null,
      RR_TR_F_POP_MR: 0,
      RR_TR_F_WH_F_MR: 0,
      RR_TR_M_POP_MR: 0,
      RR_TR_M_WH_M_MR: null,
      RR_WH_F_POP_MR: null,
      RR_WH_M_POP_MR: 0,
      SCHOOL_NAME: 'Indian Riffle Elementary School',
    };
    const race = { value: 'AS', label: 'Asian' };
    const gender = { value: 'F', label: 'Female' };
    const disability = { value: 'MR', label: 'Intellectual Disability' };
    const comparison = 'wh';
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading={false}
        visible={true}
        race={race}
        gender={gender}
        disability={disability}
        comparison={comparison}
        selectedSchool={selectedSchool}
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).toBeInTheDocument();
    expect(
      queryByText(/does not have enough students/i),
    ).not.toBeInTheDocument();
  });
  it('should render insufficient data message for given school if isLoading is falsy, visible is true, comparison is "wh", disability value is TOTAL, and risk ratio for selectedSchool is not an integer greater than or equal to zero', () => {
    const selectedSchool = {
      COMBOKEY: '40171002865',
      LEA_NAME: 'Casa Grande Elementary District',
      LEA_STATE: 'AZ',
      RR_AM_F_POP: 0.794871795,
      RR_AM_F_WH_F: 1.045454542,
      RR_AM_M_POP: 0,
      RR_AM_M_WH_M: 0,
      RR_AS_F_POP: null,
      RR_AS_F_WH_F: null,
      RR_AS_M_POP: 0,
      RR_AS_M_WH_M: 0,
      RR_BL_F_POP: 0,
      RR_BL_F_WH_F: 0,
      RR_BL_M_POP: 4.429487179,
      RR_BL_M_WH_M: 3.249999997,
      RR_HI_F_POP: 0.375,
      RR_HI_F_WH_F: 0.616071427,
      RR_HI_M_POP: 2.033044847,
      RR_HI_M_WH_M: 2.013824879,
      RR_HP_F_POP: null,
      RR_HP_F_WH_F: null,
      RR_HP_M_POP: null,
      RR_HP_M_WH_M: null,
      RR_TR_F_POP: 0,
      RR_TR_F_WH_F: 0,
      RR_TR_M_POP: 2.447368421,
      RR_TR_M_WH_M: 1.772727271,
      RR_WH_F_POP: 0.736068585,
      RR_WH_F_WH_F: 1,
      RR_WH_M_POP: 1.438339438,
      RR_WH_M_WH_M: 1,
      SCH_NAME: 'McCartney Ranch Elementary School',
    };
    const race = { value: 'AS', label: 'Asian' };
    const gender = { value: 'F', label: 'Female' };
    const disability = { value: 'TOTAL', label: 'Total Special Education' };
    const comparison = 'pop';
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading={false}
        visible={true}
        race={race}
        gender={gender}
        disability={disability}
        comparison={comparison}
        selectedSchool={selectedSchool}
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).not.toBeInTheDocument();
    expect(queryByText(/does not have enough students/i)).toBeInTheDocument();
  });
  it('should render insufficient data message for given school if isLoading is falsy, visible is true, comparison is "pop", disability value is TOTAL, and risk ratio for selectedSchool is not an integer greater than or equal to zero', () => {
    const selectedSchool = {
      COMBOKEY: '40171002865',
      LEA_NAME: 'Casa Grande Elementary District',
      LEA_STATE: 'AZ',
      RR_AM_F_POP: 0.794871795,
      RR_AM_F_WH_F: 1.045454542,
      RR_AM_M_POP: 0,
      RR_AM_M_WH_M: 0,
      RR_AS_F_POP: null,
      RR_AS_F_WH_F: null,
      RR_AS_M_POP: 0,
      RR_AS_M_WH_M: 0,
      RR_BL_F_POP: 0,
      RR_BL_F_WH_F: 0,
      RR_BL_M_POP: 4.429487179,
      RR_BL_M_WH_M: 3.249999997,
      RR_HI_F_POP: 0.375,
      RR_HI_F_WH_F: 0.616071427,
      RR_HI_M_POP: 2.033044847,
      RR_HI_M_WH_M: 2.013824879,
      RR_HP_F_POP: null,
      RR_HP_F_WH_F: null,
      RR_HP_M_POP: null,
      RR_HP_M_WH_M: null,
      RR_TR_F_POP: 0,
      RR_TR_F_WH_F: 0,
      RR_TR_M_POP: 2.447368421,
      RR_TR_M_WH_M: 1.772727271,
      RR_WH_F_POP: 0.736068585,
      RR_WH_F_WH_F: 1,
      RR_WH_M_POP: 1.438339438,
      RR_WH_M_WH_M: 1,
      SCH_NAME: 'McCartney Ranch Elementary School',
    };
    const race = { value: 'AS', label: 'Asian' };
    const gender = { value: 'F', label: 'Female' };
    const disability = { value: 'TOTAL', label: 'Total Special Education' };
    const comparison = 'pop';
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading={false}
        visible={true}
        race={race}
        gender={gender}
        disability={disability}
        comparison={comparison}
        selectedSchool={selectedSchool}
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).not.toBeInTheDocument();
    expect(queryByText(/does not have enough students/i)).toBeInTheDocument();
  });
  it('should risk ratio  message for given school if isLoading is falsy, visible is true, comparison is "pop", disability value is TOTAL, and risk ratio for selectedSchool is an integer greater than or equal to zero', () => {
    const selectedSchool = {
      COMBOKEY: '40171002865',
      LEA_NAME: 'Casa Grande Elementary District',
      LEA_STATE: 'AZ',
      RR_AM_F_POP: 0.794871795,
      RR_AM_F_WH_F: 1.045454542,
      RR_AM_M_POP: 0,
      RR_AM_M_WH_M: 0,
      RR_AS_F_POP: null,
      RR_AS_F_WH_F: null,
      RR_AS_M_POP: 0,
      RR_AS_M_WH_M: 0,
      RR_BL_F_POP: 0,
      RR_BL_F_WH_F: 0,
      RR_BL_M_POP: 4.429487179,
      RR_BL_M_WH_M: 3.249999997,
      RR_HI_F_POP: 0.375,
      RR_HI_F_WH_F: 0.616071427,
      RR_HI_M_POP: 2.033044847,
      RR_HI_M_WH_M: 2.013824879,
      RR_HP_F_POP: null,
      RR_HP_F_WH_F: null,
      RR_HP_M_POP: null,
      RR_HP_M_WH_M: null,
      RR_TR_F_POP: 0,
      RR_TR_F_WH_F: 0,
      RR_TR_M_POP: 2.447368421,
      RR_TR_M_WH_M: 1.772727271,
      RR_WH_F_POP: 0.736068585,
      RR_WH_F_WH_F: 1,
      RR_WH_M_POP: 1.438339438,
      RR_WH_M_WH_M: 1,
      SCH_NAME: 'McCartney Ranch Elementary School',
    };
    const race = { value: 'AM', label: 'American Indian / Alaskan Native' };
    const gender = { value: 'F', label: 'Female' };
    const disability = { value: 'TOTAL', label: 'Total Special Education' };
    const comparison = 'pop';
    const { queryByText } = render(
      <RiskRatioMessage
        isLoading={false}
        visible={true}
        race={race}
        gender={gender}
        disability={disability}
        comparison={comparison}
        selectedSchool={selectedSchool}
      />,
    );
    expect(queryByText(/The Risk Ratio for/i)).toBeInTheDocument();
    expect(
      queryByText(/does not have enough students/i),
    ).not.toBeInTheDocument();
  });
});
