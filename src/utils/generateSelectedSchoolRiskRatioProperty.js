const generateSelectedSchoolRiskRatioProperty = (
  race,
  gender,
  disability,
  comparison,
) => {
  if (disability?.value === 'TOTAL') {
    return `RR_${race?.value}_${gender?.value}_${
      comparison === 'pop' ? 'POP' : `WH_${gender?.value}`
    }`;
  }
  return `RR_${race?.value}_${gender?.value}_${
    comparison === 'pop' ? 'POP' : `WH_${gender?.value}`
  }_${disability?.value}`;
};

export default generateSelectedSchoolRiskRatioProperty;
