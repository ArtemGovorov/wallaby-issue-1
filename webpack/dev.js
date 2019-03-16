/* eslint-disable import/no-extraneous-dependencies */

export const dev = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              url: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}
