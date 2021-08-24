require('regenerator-runtime/runtime');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../app');

const path = 'mongodb://localhost/test';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: false,
};

beforeEach((done) => {
  mongoose.connect(path, options, () => done());
});

afterEach(() => {
  mongoose.disconnect();
});

describe('/api/v1/genders Routes', () => {
  test('GET /api/v1/genders returns all genders', async (done) => {
    const expected = {
      genders: [
        {
          _id: '611f1e46d09d28f1064f1763',
          id: 0,
          name: 'female',
          abbreviation: 'f',
        },
        {
          _id: '611f1e46d09d28f1064f1764',
          id: 1,
          name: 'male',
          abbreviation: 'm',
        },
      ],
    };
    const response = await supertest(app).get('/api/v1/genders');
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(expected);
    done();
  });
  test('GET /api/v1/genders/:id', async (done) => {
    const expected = {
      gender: [
        {
          _id: '611f1e46d09d28f1064f1764',
          id: 1,
          name: 'male',
          abbreviation: 'm',
        },
      ],
    };
    const response = await supertest(app).get('/api/v1/genders/1');
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(expected);
    done();
  });
});
