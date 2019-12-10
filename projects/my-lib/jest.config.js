const baseConfig = require("../../jest.base.config")

module.exports = {
  ...baseConfig,
  coverageDirectory: "<rootDir>/coverage/my-lib/"
}
