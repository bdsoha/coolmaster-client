/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*',
    '!src/**/index.ts',
    '!src/__stubs__/*',
  ],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1"
  }
}