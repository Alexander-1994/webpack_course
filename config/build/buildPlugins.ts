import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { type TBuildOptions, EMode } from './common';

export const buildPlugins = ({ paths, isDev, isProd }: TBuildOptions) => {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/style.[contenthash].css',
        chunkFilename: 'css/style.[contenthash].css',
      }),
    );
  }

  return plugins;
};
