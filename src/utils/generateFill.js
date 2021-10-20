const generateFill = (riskRatio) => {
  if (riskRatio >= 0 && riskRatio <= 0.33) {
    return 'cyan';
  }
  if (riskRatio > 0.33 && riskRatio <= 0.6) {
    return 'steelblue';
  }
  if (riskRatio > 0.6 && riskRatio <= 2) {
    return 'green';
  }
  if (riskRatio > 2 && riskRatio <= 3.5) {
    return 'lightcoral';
  }
  if (riskRatio > 3.5) {
    return '#8C001A';
  }
  return 'black';
};

export default generateFill;
