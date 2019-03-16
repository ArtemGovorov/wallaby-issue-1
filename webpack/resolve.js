const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      'test-utils': path.resolve(__dirname, '../test-utils'),
    },
  },
}
