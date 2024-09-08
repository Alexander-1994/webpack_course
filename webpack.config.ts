import { Configuration, ProgressPlugin } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

enum EMode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
type TEnv = { mode: EMode; port: number };

export default (env: TEnv) => {
  const isDev = env.mode === EMode.DEVELOPMENT;

  const config: Configuration = {
    mode: env.mode ?? EMode.DEVELOPMENT,
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
      isDev && new ProgressPlugin(),
    ].filter(Boolean),
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
    devtool: isDev && 'inline-source-map',
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };

  return config;
};
