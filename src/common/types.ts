import type { Dispatch } from 'react';
import { EActionType } from './constants';

export type TState = {
  firstCount: number;
  secondCount: number;
};

export type TAction = {
  type: EActionType;
};

export type TContext = {
  state: TState;
  dispatch: Dispatch<TAction>;
};
