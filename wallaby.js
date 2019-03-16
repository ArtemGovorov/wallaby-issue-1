module.exports = wallaby => ({
  files: [
    '__mocks__/**/*.js?(x)',
    'src/**/*.js?(x)',
    '!src/**/*.test.js?(x)',
  ],
  tests: ['src/**/*.test.js?(x)'],
  filesWithNoCoverageCalculated: [
    '__mocks__/**/*.js?(x)',
    'src/index.jsx',
  ],
  env: {
    type: 'node',
    runner: 'node',
  },
  compilers: {
    '**/*.js?(x)': wallaby.compilers.babel(),
  },
  testFramework: 'jest',
  debug: true,
})
