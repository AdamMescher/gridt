require('regenerator-runtime/runtime');
const supertest = require('supertest');
const app = require('../../app');

const request = supertest(app);

describe('/api/v1/genders Routes', () => {
  test('GET /api/v1/genders returns all genders', async (done) => {
    const response = await request.get('/api/v1/genders');
    expect(response.status).toBe(200);
    console.log({ body: response.body });
    done();
  });
});
