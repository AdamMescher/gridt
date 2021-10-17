const generateFill = (riskRatio) => {
  switch (riskRatio) {
    case riskRatio >= 0 && riskRatio < 1:
      return 'white';
    case riskRatio >= 1 && riskRatio <= 3:
      return 'green';
    case riskRatio > 3 && riskRatio <= 4:
      return 'orange';
    case riskRatio > 4:
      return 'red';
    default:
      return 'black';
  }
};

export default generateFill;
