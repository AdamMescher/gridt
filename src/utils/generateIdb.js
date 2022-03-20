const generateIdb = (comparison, race, gender, disability) => {
  if (comparison === 'pop')
    return `SCHOOLS_${race.value}_${gender.value}_${disability.value}_QUERY`;
  if (comparison === 'wh')
    return `SCHOOLS_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}_QUERY`;
  return null;
};

export default generateIdb;
