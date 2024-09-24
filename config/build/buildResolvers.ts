import { Configuration } from 'webpack';

import { TBuildOptions } from './common';

export const buildResolvers = ({ paths }: TBuildOptions): Configuration['resolve'] => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@': paths.src,
  },
});
