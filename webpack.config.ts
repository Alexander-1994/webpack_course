import path from 'path';

import { type TEnvVariables, buildCommon, EMode } from './config';

export default ({ mode, port, analyzer }: TEnvVariables) =>
  buildCommon({
    mode: mode ?? EMode.DEVELOPMENT,
    port: port ?? 3000,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev: mode === EMode.DEVELOPMENT,
    isProd: mode === EMode.PRODUCTION,
    analyzer,
  });
