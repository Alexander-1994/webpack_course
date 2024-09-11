import { Configuration } from 'webpack';

export const buildResolvers = (): Configuration['resolve'] => ({
  extensions: ['.tsx', '.ts', '.js'],
});
