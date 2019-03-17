module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/{dev,index}.{js,jsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(s?css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js', // Note the path equates to the same as below
    // '<rootDir>/wallaby-issue/jest.setup.js',
    // FIXME: ^^^
    // Module ./wallaby-issue/jest.setup.js in the setupFilesAfterEnv option was not found.
    // <rootDir> is: /Volumes/XT/brandonz/Coding/boilerplate/wallaby-issue
    '<rootDir>/node_modules/regenerator-runtime/runtime',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/webpack',
    '<rootDir>/*\\.js$',
  ],
}
