import '@testing-library/jest-dom';
import { client } from './ApolloClient';
import { server } from './mocks/server';

beforeAll(async () => server.listen());
beforeEach(() => client.clearStore());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
