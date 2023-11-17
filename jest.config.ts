import type { Config } from 'jest';

const config: Config = {
  setupFiles: ['./jest.polyfills.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.ts'],
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
   testEnvironmentOptions: {
    customExportConditions: [''],
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
