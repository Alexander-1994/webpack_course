import path from 'path';

import { type TEnvVariables, buildCommon, EMode } from './config';

export default (env: TEnvVariables) =>
  buildCommon({
    mode: env.mode ?? EMode.DEVELOPMENT,
    port: env.port ?? 3000,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev: env.mode === EMode.DEVELOPMENT,
    isProd: env.mode === EMode.PRODUCTION,
  });
