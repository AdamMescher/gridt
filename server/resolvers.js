module.exports = {
  Query: {
    allGenders: async (root, data, { mongo: { Genders } }) =>
      // 1
      await Genders.find({}).toArray(), // 2
  },
  Mutation: {
    createGender: async (root, data, { mongo: { Genders } }) => {
      const response = await Genders.insert(data); // 3
      return { id: response.insertedIds[0], ...data }; // 4
    },
  },
  Gender: {
    id: (root) => root._id || root.id, // 5
  },
};
