const baseConfig = require("../../jest.base.config")
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('../../tsconfig');

module.exports = {
  ...baseConfig,
  coverageDirectory: "<rootDir>/coverage/my-app/",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  modulePathIgnorePatterns: [
    '/my-lib/'
  ]
}
