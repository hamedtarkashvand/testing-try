
// eslint-disable-next-line @typescript-eslint/no-var-requires
const matchers = require('@testing-library/jest-dom');
expect.extend(matchers);

// eslint-disable-next-line no-undef
afterEach(() => {
  // eslint-disable-next-line no-undef
  jest.useRealTimers();
});

