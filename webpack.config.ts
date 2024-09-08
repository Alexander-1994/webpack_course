import { Configuration, ProgressPlugin } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type TEnv = { mode: 'development' | 'production' };

export default (env: TEnv): Configuration => ({
  mode: env.mode ?? 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
});
