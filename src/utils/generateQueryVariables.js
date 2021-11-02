const generateQueryVariables = (comparison, race, gender, disability) => {
  if (!disability) {
    return comparison === 'pop'
      ? {
          schoolsLimit: -1,
          schoolsFilter: {
            _operators: {
              [`RR_${race}_${gender}_POP`]: { gt: 0 },
            },
          },
        }
      : {
          schoolsLimit: -1,
          schoolsFilter: {
            _operators: {
              [`RR_${race}_${gender}_WH_${gender}`]: { gt: 0 },
            },
          },
        };
  }
};

export default generateQueryVariables;
