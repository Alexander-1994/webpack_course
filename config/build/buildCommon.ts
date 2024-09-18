import { Configuration } from 'webpack';

import { type TBuildOptions } from './common';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildCommon = (options: TBuildOptions) => {
  const { mode, paths, isDev } = options;

  const config: Configuration = {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: 'js/bundle.[name].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };

  return config;
};
