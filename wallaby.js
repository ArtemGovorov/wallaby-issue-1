module.exports = wallaby => ({
  files: [
    '__mocks__/**/*.js?(x)',
    'src/**/*.js?(x)',
    '!src/**/*.test.js?(x)',
    'jest.setup.js',
    'webpack.config.babel.js',
    'webpack/**/*.js',
    {pattern: '.babelrc', instrument: false},
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
