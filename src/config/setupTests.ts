import '@testing-library/jest-dom';
import { server } from './../../mocks/services';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
