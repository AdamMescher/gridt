import generateFill from './generateFill';
import generateBins from './generateBins';
import generateSelectedSchoolRiskRatioProperty from './generateSelectedSchoolRiskRatioProperty';

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
