import { EMode } from './constants';

type TPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
};

export type TEnvVariables = { mode?: EMode; port?: number; analyzer?: boolean };

export type TBuildOptions = Required<TEnvVariables> & {
  paths: TPaths;
  isDev: boolean;
  isProd: boolean;
};
