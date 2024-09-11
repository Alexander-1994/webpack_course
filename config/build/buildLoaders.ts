import { ModuleOptions, RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { TBuildOptions } from './common';

export const buildLoaders = ({ isDev, isProd }: TBuildOptions): ModuleOptions['rules'] => {
  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [isDev && 'style-loader', isProd && MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  };

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [sassLoader, tsLoader];
};
