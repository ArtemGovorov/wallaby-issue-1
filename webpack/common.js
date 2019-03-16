/* eslint-disable import/no-extraneous-dependencies */
import HTMLWebpackPlugin from 'html-webpack-plugin'

import { resolve } from './resolve'

export const common = {
  resolve,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/templates/index.html',
    }),
  ],
}
