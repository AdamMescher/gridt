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
  test.only('GET /api/v1/genders returns all genders', async (done) => {
    const genderFiller = [
      { id: 0, name: 'female', abbreviation: 'f' },
      { id: 1, name: 'male', abbreviation: 'm' },
    ];
    genderFiller.forEach(async (gender) => {
      await Gender.create(gender);
    });
    const response = await supertest(app).get('/api/v1/genders');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data.results)).toBeTruthy();
    // expect(response.body.data[0]._id).toBe();
    // expect(response.body.data[0].id).toBe();
    // expect(response.body.data[0].name).toBe();
    // expect(response.body.data[0].abbreviation).toBe();
    done();
  });
});
