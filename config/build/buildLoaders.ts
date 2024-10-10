import { ModuleOptions, RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import type { TBuildOptions } from './common';

export const buildLoaders = ({ isDev, isProd }: TBuildOptions): ModuleOptions['rules'] => {
  const sassLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
      },
    },
  };

  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [isDev && 'style-loader', isProd && MiniCssExtractPlugin.loader, sassLoaderWithModules, 'sass-loader'],
  };

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  const assetLoader: RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgrLoader: RuleSetRule = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [{ name: 'convertColors', params: { currentColor: true } }],
          },
        },
      },
    ],
  };

  return [sassLoader, tsLoader, assetLoader, svgrLoader];
};
