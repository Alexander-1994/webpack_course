import { EActionType, INITIAL_STATE } from './constants';
import type { TState, TAction } from './types';

export const reducer = (state: TState, acton: TAction) => {
  switch (acton.type) {
    case EActionType.FIRST_COUNT_INC:
      return {
        ...state,
        firstCount: (state.firstCount += 1),
      };
    case EActionType.FIRST_COUNT_DEC:
      return {
        ...state,
        firstCount: (state.firstCount -= 1),
      };
    case EActionType.SECOND_COUNT_INC:
      return {
        ...state,
        secondCount: (state.secondCount += 1),
      };
    case EActionType.SECOND_COUNT_DEC:
      return {
        ...state,
        secondCount: (state.secondCount -= 1),
      };
    default:
      return INITIAL_STATE;
  }
};
