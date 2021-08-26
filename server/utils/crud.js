const queryOptions = require('./queryOptions');
const requiredParameters = require('./requiredParameters');
const uniqueParameters = require('./uniqueParameters');

const createOne = (model) => async (request, response) => {
  try {
    const required = requiredParameters[model.modelName.toLowerCase()];
    const unique = uniqueParameters[model.modelName.toLowerCase()];
    for (let i = 0; i < required.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      if (!Object.prototype.hasOwnProperty.call(request.body, required[i])) {
        return response.status(422).json({
          error: `Request body is missing the required '${required[i]}' property`,
        });
      }
    }
    for (let j = 0; j < unique.length; j += 1) {
      // eslint-disable-next-line no-await-in-loop
      const found = await model.countDocuments({
        [unique[j]]: request.body[unique[j]],
      });
      if (found > 0) {
        return response.status(409).json({
          message: `A ${model.modelName} with ${unique[j]}: ${
            request.body[unique[j]]
          } already exists.`,
        });
      }
    }
    // eslint-disable-next-line no-await-in-loop
    const doc = await model.create({ ...request.body });
    return response.status(201).json({ data: doc });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return response.status(400).json({ error }).end();
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
    // eslint-disable-next-line no-console
    console.error(error);
    response.status(400).json({ error });
  }
};

const getMany = (model) => async (request, response) => {
  try {
    const docs = await model.find({}).lean().exec();
    if (!docs) {
      return response.status(404).json({
        message: `No ${model.modelName} with ID: ${request.params.id} found`,
      });
    }
    response.status(200).json({ data: docs });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    response.status(400).json({ error });
  }
};

const removeOne = (model) => async (request, response) => {
  try {
    const removed = await model.findOneAndRemove({
      [queryOptions[model.modelName.toLowerCase()]]:
        request.params[queryOptions[model.modelName.toLowerCase()]],
    });
    if (!removed) {
      response.status(404).json({
        message: `No ${model.modelName} with ID: ${request.params.id} found`,
      });
    }
    response.status(202).json({
      message: `${model.modelName} with ID: ${request.params.id} deleted successfully`,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    response.status(400).json({ error });
  }
};

const removeMany = (model) => async (request, response) => {
  try {
    await model.deleteMany({});
    response
      .status(202)
      .json({ message: `All ${model.modelName}s deleted successfully` });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    response.status(400).json({ error });
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
      response.status(404).json({
        message: `No ${model.modelName} with ID: ${request.params.id} found`,
      });
    }
    response.status(204).json({
      message: `Updated ${model.modelName} with ID: ${request.params.id} successfully`,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    response.status(400).json({ error });
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
