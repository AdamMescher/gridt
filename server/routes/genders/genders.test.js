require('regenerator-runtime/runtime');
const supertest = require('supertest');
const { MongoClient } = require('mongodb');
const app = require('../../app');

const request = supertest(app);

const url = 'mongodb://localhost/test-genders';
const options = { useNewUrlParser: true, connectTimeoutMS: 10000 };
const client = new MongoClient(url, options);

beforeAll(async () => {
  await client.connect(url, options);
});

describe('/api/v1/genders Routes', () => {
  test('GET /api/v1/genders returns all genders', async (done) => {
    const response = await request.get('/api/v1/genders');
    expect(response.status).toBe(200);
    done();
  });
});
