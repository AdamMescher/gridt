import localForage from 'localforage';

const getGraphData = async (queryString, fetchData, set) => {
  const local = await localForage.getItem(queryString);
  if (!local) {
    const schools = await fetchData();
    await localForage.setItem(queryString, schools);
    set(schools);
  } else {
    set(local);
  }
};

export default getGraphData;
