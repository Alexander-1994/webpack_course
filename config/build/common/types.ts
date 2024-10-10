import { EMode, EPlatform } from './constants';

type TPaths = {
  entry: string;
  output: string;
  public: string;
  src: string;
};

export type TEnvVariables = { mode?: EMode; port?: number; analyzer?: boolean; platform?: EPlatform };

export type TBuildOptions = Required<TEnvVariables> & {
  paths: TPaths;
  isDev: boolean;
  isProd: boolean;
};
