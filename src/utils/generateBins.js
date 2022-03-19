const generateBins = (arr) => {
  const bins = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
    9.5, 10,
  ];
  const binCount = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
    thirteen: 0,
    fourteen: 0,
    fifteen: 0,
    sixteen: 0,
    seventeen: 0,
    eighteen: 0,
    nineteen: 0,
    twenty: 0,
  };
  arr.forEach((num) => {
    if (num <= bins[1]) {
      binCount.one += 1;
    } else if (num > bins[1] && num <= bins[2]) {
      binCount.two += 1;
    } else if (num > bins[2] && num <= bins[3]) {
      binCount.three += 1;
    } else if (num > bins[3] && num <= bins[4]) {
      binCount.four += 1;
    } else if (num > bins[4] && num <= bins[5]) {
      binCount.five += 1;
    } else if (num > bins[5] && num <= bins[6]) {
      binCount.six += 1;
    } else if (num > bins[6] && num <= bins[7]) {
      binCount.seven += 1;
    } else if (num > bins[7] && num <= bins[8]) {
      binCount.eight += 1;
    } else if (num > bins[8] && num <= bins[9]) {
      binCount.nine += 1;
    } else if (num > bins[9] && num <= bins[10]) {
      binCount.ten += 1;
    } else if (num > bins[10] && num <= bins[11]) {
      binCount.eleven += 1;
    } else if (num > bins[11] && num <= bins[12]) {
      binCount.twelve += 1;
    } else if (num > bins[12] && num <= bins[13]) {
      binCount.thirteen += 1;
    } else if (num > bins[13] && num <= bins[14]) {
      binCount.fourteen += 1;
    } else if (num > bins[14] && num <= bins[15]) {
      binCount.fifteen += 1;
    } else if (num > bins[15] && num <= bins[16]) {
      binCount.sixteen += 1;
    } else if (num > bins[16] && num <= bins[17]) {
      binCount.seventeen += 1;
    } else if (num > bins[17] && num <= bins[18]) {
      binCount.eighteen += 1;
    } else if (num > bins[18] && num <= bins[19]) {
      binCount.nineteen += 1;
    } else if (num > bins[19] && num <= bins[20]) {
      binCount.twenty += 1;
    }
  });
  return binCount;
};

export default generateBins;
