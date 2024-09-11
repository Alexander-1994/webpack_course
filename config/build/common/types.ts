import { EMode } from './constants';

type TPaths = {
  entry: string;
  output: string;
  html: string;
};

export type TEnvVariables = { mode?: EMode; port?: number };

export type TBuildOptions = Required<TEnvVariables> & {
  paths: TPaths;
  isDev: boolean;
  isProd: boolean;
};
