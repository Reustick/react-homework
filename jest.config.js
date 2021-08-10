module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/internals/__mocks__/styleMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["e2e"],
  moduleDirectories: ["node_modules", "src"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 70,
      lines: 80,
    },
  },
};
