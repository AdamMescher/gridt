require('regenerator-runtime');
const mongoose = require('mongoose');
const supertest = require('supertest');
const router = require('./gender.router');
const app = require('../../app');
const Gender = require('./gender.model');

const path = 'mongodb://localhost/gridt-test';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: false,
};
const mockGender = { id: 3, name: 'kiume', abbreviation: 'k' };
const mockGenders = [
  { id: 0, name: 'female', abbreviation: 'f' },
  { id: 1, name: 'male', abbreviation: 'm' },
];

beforeEach((done) => {
  mongoose.connect(path, options, () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => mongoose.disconnect(() => done()));
});

describe('Gender router', () => {
  test('has CRUD routes', () => {
    const routes = [
      { path: '/', method: 'get' },
      { path: '/', method: 'post' },
      { path: '/', method: 'put' },
      { path: '/:id', method: 'get' },
      { path: '/:id', method: 'delete' },
    ];
    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method],
      );
      expect(match).toBeTruthy();
    });
  });
});

describe('/api/v1/genders Routes', () => {
  test('GET /api/v1/genders returns all Gender documents', async (done) => {
    // 200
    await Gender.insertMany(mockGenders);
    const response = await supertest(app).get('/api/v1/genders');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data.results)).toBeTruthy();
    expect(response.body.data.results.length).toBe(2);
    expect(response.body.data.results[0].name).toBeTruthy();
    expect(response.body.data.results[0].abbreviation).toBeTruthy();
    expect(response.body.data.results[1].name).toBeTruthy();
    expect(response.body.data.results[1].abbreviation).toBeTruthy();
    done();
  });
  test('GET /api/v1/genders/:id returns one Gender document', async (done) => {
    let response = await supertest(app).get('/api/v1/genders/abc');
    expect(response.status).toBe(400);
    response = await supertest(app).get('/api/v1/genders/100');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe(
      'No Gender with ID: 100 found in genders collection',
    );
    await Gender.insertMany(mockGenders);
    response = await supertest(app).get('/api/v1/genders/1');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data.length).toBe(1);
    expect(response.body.data[0].name).toBeTruthy();
    expect(response.body.data[0].abbreviation).toBeTruthy();
    done();
  });
  test('POST /api/v1/genders creates a new Gender document', async (done) => {
    let response = await supertest(app).get('/api/v1/genders/q');
    expect(response.status).toBe(400);
    response = await supertest(app).get('/api/v1/genders/0');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe(
      'No Gender with ID: 0 found in genders collection',
    );
    response = await supertest(app).post('/api/v1/genders').send(mockGender);
    expect(response.status).toBe(201);
    expect(response.body.data.id).toBe(mockGender.id);
    expect(response.body.data.name).toBe(mockGender.name);
    expect(response.body.data.abbreviation).toBe(mockGender.abbreviation);
    done();
  });
});
