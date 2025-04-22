import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    main: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /lib/
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: 'index.html',
    compress: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;