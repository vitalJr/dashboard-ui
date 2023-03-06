module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpeg|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '\\.svg': '<rootDir>/src/__test__/mocks/svg.js',
  },
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '<rootDir>/cypress/'],

  testMatch: ['**/?(*.)+(test).(tsx)'],
  coveragePathIgnorePatterns: [
    '__test__/mocks',
    'node_modules',
    'index.ts',
    '^.*\\.stories\\.[jt]sx?$',
  ],
};
