require('regenerator-runtime/runtime');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../app');

const path = 'mongodb://localhost/gridt';
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
      data: [
        {
          _id: '61258ee7bdb4610e40cf0d34',
          id: 0,
          name: 'female',
          abbreviation: 'f',
        },
        {
          _id: '61258ee7bdb4610e40cf0d35',
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
      data: [
        {
          _id: '61258ee7bdb4610e40cf0d35',
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
