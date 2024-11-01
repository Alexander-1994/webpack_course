import path from 'path';
import { Configuration, DefinePlugin, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import { type TBuildOptions } from './common';

export const buildPlugins = ({ paths, isDev, isProd, analyzer, platform }: TBuildOptions) => {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.public, 'index.html'),
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    new DefinePlugin({ __PLATFORM__: JSON.stringify(platform) }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    // plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/style.[contenthash].css',
        chunkFilename: 'css/style.[contenthash].css',
      }),
    );
    plugins.push(
      new CopyPlugin({
        patterns: [{ from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') }],
      }),
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};
