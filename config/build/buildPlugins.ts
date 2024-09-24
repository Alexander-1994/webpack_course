import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type TBuildOptions } from './common';

export const buildPlugins = ({ paths, isDev, isProd, analyzer }: TBuildOptions) => {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  isDev && plugins.push(new ProgressPlugin());

  isProd &&
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/style.[contenthash].css',
        chunkFilename: 'css/style.[contenthash].css',
      }),
    );

  analyzer && plugins.push(new BundleAnalyzerPlugin());

  return plugins;
};
