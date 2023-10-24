import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.{tsx,ts}?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|css)$':
      '<rootDir>/src/test/__ mocks __/fileMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  // collectCoverageFrom: [
  //   '**/*.{js,jsx,ts.tsx}',
  //   '!**/node_modules/**',
  //   '!**/vendor/**'
  // ],
};
// --collectCoverageFrom='src/components/**/*.{ts,tsx}'  --collectCoverageFrom='!src/components/**/*.{types,stories,constant,test,spec}.{ts,tsx}'
export default config;
