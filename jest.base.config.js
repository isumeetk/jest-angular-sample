module.exports = {
  preset: "jest-preset-angular",
  roots: ['.'],
  setupFilesAfterEnv: "<rootDir>/setup-jest.ts",
  collectCoverage: true,
  coverageReporters: ["html", "text"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/e2e/",
    "test.ts"
  ],
  transform: {
    "^.+\\.(t)sx?$": "ts-jest"
  }
}
