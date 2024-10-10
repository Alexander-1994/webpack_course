import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import type { TBuildOptions } from './common';

export const buildDevServer = ({ port }: TBuildOptions): DevServerConfiguration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
