const generateOperators = (
  comparison,
  race,
  gender,
  disability,
  riskRatioFilterFloor,
  enrollmentFilterFloor,
) => {
  if (comparison === 'pop') {
    if (disability.value === 'TOTAL') {
      return {
        [`RR_${race.value}_${gender.value}_POP`]: {
          gte: riskRatioFilterFloor,
        },
        [`SCH_IDEAENR_${race.value}_${gender.value}`]: {
          gt: enrollmentFilterFloor,
        },
      };
    } else {
      return {
        [`RR_${race.value}_${gender.value}_POP_${disability.value}`]: {
          gte: riskRatioFilterFloor,
        },
        [`SCH_${disability.value}_ENR_${race.value}_${gender.value}`]: {
          gt: enrollmentFilterFloor,
        },
      };
    }
  }
  if (comparison === 'wh') {
    if (disability.value === 'TOTAL') {
      return {
        [`RR_${race.value}_${gender.value}_WH_${gender.value}`]: {
          gte: riskRatioFilterFloor,
        },
        [`SCH_IDEAENR_${race.value}_${gender.value}`]: {
          gt: enrollmentFilterFloor,
        },
      };
    } else {
      return {
        [`RR_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}`]:
          {
            gte: riskRatioFilterFloor,
          },
        [`SCH_${disability.value}_ENR_${race.value}_${gender.value}`]: {
          gt: enrollmentFilterFloor,
        },
      };
    }
  }
  return null;
};

export default generateOperators;
