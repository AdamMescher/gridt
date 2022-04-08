import generateFill from './generateFill';
import generateBins from './generateBins';
import generateSelectedSchoolRiskRatioProperty from './generateSelectedSchoolRiskRatioProperty';
import generateIdb from './generateIdb';
import generateOperators from './generateOperators';
import setTypeAndQueryFromDisability from './setTypeAndQueryFromDisability';
import asyncSelectQueries from './queries/asyncSelect/asyncSelectQueries';

describe('generateFill utility function', () => {
  it('should return a color for a given risk ratio', () => {
    expect(generateFill(0)).toBe('cyan');
    expect(generateFill(0.331)).toBe('steelblue');
    expect(generateFill(0.61)).toBe('green');
    expect(generateFill(2.1)).toBe('lightcoral');
    expect(generateFill(3.51)).toBe('#8C001A');
    expect(generateFill(-0.1)).toBe('black');
  });
});

describe('generateBins utility function', () => {
  it('should return binsize object with expected bin size', () => {
    const data = [
      0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5,
      3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5, 6.75, 7, 7.25,
      7.5, 7.75, 8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75, 10, 10.25, 10.5, 10.75,
    ];
    const expected = {
      one: 3,
      two: 2,
      three: 2,
      four: 2,
      five: 2,
      six: 2,
      seven: 2,
      eight: 2,
      nine: 2,
      ten: 2,
      eleven: 2,
      twelve: 2,
      thirteen: 2,
      fourteen: 2,
      fifteen: 2,
      sixteen: 2,
      seventeen: 2,
      eighteen: 2,
      nineteen: 2,
      twenty: 2,
    };
    const result = generateBins(data);
    expect(result).toEqual(expected);
  });
  describe('generateSelecteSchoolRiskRatioProperty utility function', () => {
    it('should return POP when rest of population option is selected', () => {
      const gender = { value: 'F', label: 'Female' };
      const race = { value: 'AS', label: 'Asian' };
      const disability = { value: 'DD', label: 'Developmental Delay' };
      const comparison = 'pop';
      const expected = 'RR_AS_F_POP_DD';
      const result = generateSelectedSchoolRiskRatioProperty(
        race,
        gender,
        disability,
        comparison,
      );
      expect(result).toEqual(expected);
    });
    it('should return comparison to white population when white population option is selected', () => {
      const gender = { value: 'M', label: 'Male' };
      const race = { value: 'HI', label: 'Hispanic' };
      const disability = { value: 'TOTAL', label: 'Total Special Education' };
      const comparisonToRestOfPopulation = 'pop';
      const comparisonToWhitePopulation = 'wh';
      const restOfPopulationComparisonResult =
        generateSelectedSchoolRiskRatioProperty(
          race,
          gender,
          disability,
          comparisonToRestOfPopulation,
        );
      const whiteComparisonResult = generateSelectedSchoolRiskRatioProperty(
        race,
        gender,
        disability,
        comparisonToWhitePopulation,
      );
      const expectedPop = 'RR_HI_M_POP';
      const expectedWh = 'RR_HI_M_WH_M';
      expect(restOfPopulationComparisonResult).toEqual(expectedPop);
      expect(whiteComparisonResult).toEqual(expectedWh);
    });
  });
});

describe('generateIdb utility function', () => {
  it('should return null if comparison is neither "pop" or "wh"', () => {
    const comparison = 'test';
    const gender = { value: 'M', label: 'Male' };
    const race = { value: 'HI', label: 'Hispanic' };
    const disability = { value: 'TOTAL', label: 'Total Special Education' };
    const result = generateIdb(comparison, race, gender, disability);
    const expected = null;
    expect(result).toBe(expected);
  });
  it('should return expected string when comparison is "pop"', () => {
    const comparison = 'pop';
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AS', label: 'Asian' };
    const disability = { value: 'DD', label: 'Developmental Delay' };
    const result = generateIdb(comparison, race, gender, disability);
    const expected = 'SCHOOLS_AS_F_DD_QUERY';
    expect(result).toBe(expected);
  });
  it('should return expected string when comparison is "wh"', () => {
    const comparison = 'wh';
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AS', label: 'Asian' };
    const disability = { value: 'DD', label: 'Developmental Delay' };
    const result = generateIdb(comparison, race, gender, disability);
    const expected = 'SCHOOLS_AS_F_WH_F_DD_QUERY';
    expect(result).toBe(expected);
  });
});

describe('generateOperators utility function', () => {
  it('should return null if comparison is not "pop" or "wh"', () => {
    const comparison = 'test';
    const result = generateOperators(comparison);
    const expected = null;
    expect(result).toBe(expected);
  });
  it('should return object with expected risk ratio and school enrollment filter operators if comparison is "pop" and disability value is "TOTAL"', () => {
    const comparison = 'pop';
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AS', label: 'Asian' };
    const disability = { value: 'TOTAL', label: 'Total Special Education' };
    const riskRatioFilterFloor = -1;
    const enrollmentFilterFloor = 5;
    const expected = { RR_AS_F_POP: { gte: -1 }, SCH_IDEAENR_AS_F: { gt: 5 } };
    const result = generateOperators(
      comparison,
      race,
      gender,
      disability,
      riskRatioFilterFloor,
      enrollmentFilterFloor,
    );
    expect(result).toStrictEqual(expected);
  });
  it('should return object with expected risk ratio and school enrollment filter operators if comparison is "pop" and disability value is not "TOTAL"', () => {
    const comparison = 'pop';
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AS', label: 'Asian' };
    const disability = { value: 'DD', label: 'Developmental Delay' };
    const riskRatioFilterFloor = -1;
    const enrollmentFilterFloor = 5;
    const expected = {
      RR_AS_F_POP_DD: { gte: -1 },
      SCH_DD_ENR_AS_F: { gt: 5 },
    };
    const result = generateOperators(
      comparison,
      race,
      gender,
      disability,
      riskRatioFilterFloor,
      enrollmentFilterFloor,
    );
    expect(result).toStrictEqual(expected);
  });
  it('should return object with expected risk ratio and school enrollment filter operators if comparison is "wh" and disability value is "TOTAL"', () => {
    const comparison = 'wh';
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AS', label: 'Asian' };
    const disability = { value: 'TOTAL', label: 'Total Special Education' };
    const riskRatioFilterFloor = -1;
    const enrollmentFilterFloor = 5;
    const expected = { RR_AS_F_WH_F: { gte: -1 }, SCH_IDEAENR_AS_F: { gt: 5 } };
    const result = generateOperators(
      comparison,
      race,
      gender,
      disability,
      riskRatioFilterFloor,
      enrollmentFilterFloor,
    );
    expect(result).toStrictEqual(expected);
  });
  it('should return object with expected risk ratio and school enrollment filter operators if comparison is "wh" and disability value is not "TOTAL"', () => {
    const comparison = 'wh';
    const gender = { value: 'F', label: 'Female' };
    const race = { value: 'AS', label: 'Asian' };
    const disability = { value: 'DD', label: 'Developmental Delay' };
    const riskRatioFilterFloor = -1;
    const enrollmentFilterFloor = 5;
    const expected = {
      RR_AS_F_WH_F_DD: { gte: -1 },
      SCH_DD_ENR_AS_F: { gt: 5 },
    };
    const result = generateOperators(
      comparison,
      race,
      gender,
      disability,
      riskRatioFilterFloor,
      enrollmentFilterFloor,
    );
    expect(result).toStrictEqual(expected);
  });
});

describe('setTypeAndQueryFromDisability utility function', () => {
  it('should return an object with default type and query properties if no disability provided', () => {
    const result = setTypeAndQueryFromDisability('TOTAL');
    const expected = {
      type: 'schools',
      query: asyncSelectQueries.SCHOOLS_BY_NAME_ASNYCSELECT,
    };
    expect(result).toStrictEqual(expected);
  });
  it('should return expected object with expected type and disability when disabilty is set to OHI', () => {
    const disability = { value: 'OHI', label: 'Other Health Issue' };
    const result = setTypeAndQueryFromDisability(disability);
    const expected = {
      type: 'otherhealthimpairments',
      query: asyncSelectQueries.OTHER_HEALTH_IMPAIRMENTS_BY_NAME_ASYNCSELECT,
    };
    expect(result).toStrictEqual(expected);
  });
});
