const getOne = (model) => async (request, response) => {
  try {
    const doc = await model.find({ id: request.params.id });
    if (!doc) {
      return response.status(404).end();
    }
    response.status(200).json({ data: doc });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
};

const getMany = (model) => async (request, response) => {
  try {
    const docs = await model.find({}).lean().exec();
    if (!docs) {
      return response.status(404).end();
    }
    response.status(200).json({ data: docs });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
};

const crudControllers = (model) => ({
  getOne: getOne(model),
  getMany: getMany(model),
});

module.exports = crudControllers;
