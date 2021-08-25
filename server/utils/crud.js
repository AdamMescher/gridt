const queryOptions = require('./queryOptions');

const createOne = (model) => async (request, response) => {
  try {
    // check for duplicates, return error if duplicate
    // check for null, do not return null values
    const doc = await model.create({ ...request.body });
    response.status(201).json({ data: doc });
  } catch (error) {
    console.error(error);
    response.status(400).end();
  }
};

const getOne = (model) => async (request, response) => {
  try {
    const doc = await model.find({
      [queryOptions[model.modelName.toLowerCase()]]:
        request.params[queryOptions[model.modelName.toLowerCase()]],
    });
    if (!doc) {
      response.status(404).end();
    }
    response.status(200).json({ data: doc });
  } catch (error) {
    console.error(error);
    response.status(400).json({ message: 'Bad request' });
  }
};

const getMany = (model) => async (request, response) => {
  try {
    const docs = await model.find({}).lean().exec();
    if (!docs) {
      return response
        .status(404)
        .json({ message: `No ${model} with ID: ${request.params.id} found` });
    }
    response.status(200).json({ data: docs });
  } catch (error) {
    console.error(error);
    response.status(400).end();
  }
};

const removeOne = (model) => async (request, response) => {
  try {
    const removed = await model.findOneAndRemove({
      [queryOptions[model.modelName.toLowerCase()]]:
        request.params[queryOptions[model.modelName.toLowerCase()]],
    });
    if (!removed) {
      response
        .status(404)
        .json({ message: `No ${model} with ID: ${request.params.id} found` });
    }
    response.status(202).json({
      message: `${model} with ID: ${request.params.id} deleted successfully`,
    });
  } catch (error) {
    console.error(error);
    response.status(400).end();
  }
};

const removeMany = (model) => async (request, response) => {
  try {
    await model.deleteMany({});
    response
      .status(202)
      .json({ message: `All ${model}s deleted successfully` });
  } catch (error) {
    console.error(error);
    response.status(400).end();
  }
};

const updateOne = (model) => async (request, response) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          [queryOptions[model.modelName.toLowerCase()]]:
            request.params[queryOptions[model.modelName.toLowerCase()]],
        },
        request.body,
        { new: true },
      )
      .lean()
      .exec();
    if (!updatedDoc) {
      response
        .status(404)
        .json({ message: `No ${model} with ID: ${request.params.id} found` });
    }
    response.status(204).json({
      message: `Updated ${model} with ID: ${request.params.id} successfully`,
    });
  } catch (error) {
    console.error(error);
    response.status(400).end();
  }
};

const crudControllers = (model) => ({
  createOne: createOne(model),
  getOne: getOne(model),
  getMany: getMany(model),
  removeOne: removeOne(model),
  removeMany: removeMany(model),
  updateOne: updateOne(model),
});

module.exports = crudControllers;
