const generateFill = (riskRatio) => {
  if (riskRatio >= 0 && riskRatio <= 0.33) {
    return 'cyan';
  } else if (riskRatio > 0.33 && riskRatio <= 0.6) {
    return 'steelblue';
  } else if (riskRatio > 0.6 && riskRatio <= 2) {
    return 'green';
  } else if (riskRatio > 2 && riskRatio <= 3.5) {
    return 'lightcoral';
  } else if (riskRatio > 3.5) {
    return '#8C001A';
  } else {
    return 'black';
  }
};

export default generateFill;
