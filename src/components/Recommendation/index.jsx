const Recommendation = ({ race, gender, comparison, selectedSchool }) => {
  const riskRatio =
    comparison === 'pop'
      ? selectedSchool[`RR_${race.value}${gender.value}_POP`]
      : selectedSchool[
          `RR_${race.value}${gender.value}_WH_${gender.value}_POP`
        ];
  return (
    <div>
      {selectedSchool ? <p>School: {selectedSchool.label}</p> : null}
      {riskRatio ? (
        <div>Risk Ratio: {riskRatio}</div>
      ) : (
        <p>Risk Ratio: No risk ratio for this school, race, and gender</p>
      )}
    </div>
  );
};

export default Recommendation;
