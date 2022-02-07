const generteRecommendationText = (riskRatio) => {
  if (riskRatio >= 0 && riskRatio <= 0.33) {
    return 'Recommendation for risk ratio greater than 0 and less than or equal to 0.33.';
  } else if (riskRatio > 0.33 && riskRatio <= 0.6) {
    return 'Recommendation for risk ratio greater than 0.33 and less than or equal to 0.6.';
  } else if (riskRatio > 0.6 && riskRatio <= 2) {
    return 'Recommendation for risk ratio greater than 0.6 and less than or equal to 2';
  } else if (riskRatio > 2 && riskRatio <= 3.5) {
    return 'Recommendation for risk ratio greater than 2 and less than or equal to 3.5';
  } else if (riskRatio > 3.5) {
    return 'Recommendation for risk ratio greater than 3.5';
  } else {
    return 'No risk ratio for this race and gender combination is available for this school.';
  }
};

const Recommendation = ({ isLoading, race, gender, comparison, school }) => {
  const riskRatio =
    comparison === 'pop'
      ? school[`RR_${race.value}_${gender.value}_POP`]
      : school[`RR_${race.value}_${gender.value}_WH_${gender.value}`];
  return (
    <div>
      {!isLoading && school ? (
        <div>
          <p>School: {school.label}</p>
          <p>Risk Ratio: {riskRatio}</p>
          <p>Recommendation: {generteRecommendationText(riskRatio)}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Recommendation;
