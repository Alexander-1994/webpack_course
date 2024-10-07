import path from 'path';

import { type TEnvVariables, buildCommon, EMode, EPlatform } from './config';

export default ({ mode, port, analyzer, platform }: TEnvVariables) => {
  const availableMode = mode ?? EMode.DEVELOPMENT;

  return buildCommon({
    mode: availableMode,
    port: port ?? 3000,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev: availableMode === EMode.DEVELOPMENT,
    isProd: availableMode === EMode.PRODUCTION,
    analyzer: analyzer ?? false,
    platform: platform ?? EPlatform.DESKTOP,
  });
};
