require('regenerator-runtime');
const Gender = require('./gender.model');

describe('Gender model', () => {
  test('id', () => {
    const { id } = Gender.schema.obj;
    expect(id).toEqual({
      immutable: true,
      type: Number,
      required: true,
      unique: true,
    });
  });
  test('name', () => {
    const { name } = Gender.schema.obj;
    expect(name).toEqual({
      type: String,
      required: true,
    });
  });
  test('abbreviation', () => {
    const { abbreviation } = Gender.schema.obj;
    expect(abbreviation).toEqual({
      type: String,
      required: true,
    });
  });
});
