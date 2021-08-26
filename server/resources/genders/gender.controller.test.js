require('regenerator-runtime');
const controllers = require('./gender.controller');

describe('item controllers', () => {
  test('has CRUD controllers', () => {
    const crudMethods = [
      'getOne',
      'getMany',
      'createOne',
      'removeOne',
      'removeMany',
      'updateOne',
    ];

    crudMethods.forEach((name) =>
      expect(typeof controllers[name]).toBe('function'),
    );
  });
});
