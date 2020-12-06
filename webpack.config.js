const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.ts',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'pages/excursions/excursions.pug',
      filename: 'index.html',
      chunks: ['index'],
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.sass$/,
        exclude: /\.module\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.(woff2|woff)$/,
        include: /fonts/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            esModule: false,
          },
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /(fonts|favicon)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
            esModule: false,
          },
        },
      },
      {
        test: /\.(ico|png|svg|xml|webmanifest)$/,
        include: /favicon/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '.',
            esModule: false,
          },
        },
      },
    ],
  },
  devServer: {
    watchContentBase: true,
    progress: true,
    stats: 'errors-warnings',
    hot: true,
    historyApiFallback: true,
    overlay: true,
  },
};
