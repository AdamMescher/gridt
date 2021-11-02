import localForage from 'localforage';

const getGraphData = async (queryString, fetchData, set) => {
  const local = await localForage.getItem(queryString);
  console.log({ local });
  if (!local) {
    console.log('FIRED NO LOCAL');
    const schools = await fetchData();
    await localForage.setItem(queryString, schools);
    set(schools);
  } else {
    set(local);
  }
};

export default getGraphData;
