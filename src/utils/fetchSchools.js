const fetchSchools = async (client, query, variables) => {
  const { data } = await client.query({ query, variables });
  const key = Object.keys(data.schools[0])[0];
  return data
    ? data.schools.map((school) => ({
        x: school[key],
      }))
    : [];
};

export default fetchSchools;
