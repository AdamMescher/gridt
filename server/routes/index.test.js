require('regenerator-runtime/runtime');
const supertest = require('supertest');
const app = require('../app');

describe('/ - Root Path', () => {
  test('GET root - /', async (done) => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('this is the way');
    done();
  });
});
