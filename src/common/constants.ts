import { TState } from './types'

export const INITIAL_STATE: TState = {
  firstCount: 0,
  secondCount: 0,
}

export enum EActionType {
  'FIRST_COUNT_INC',
  'FIRST_COUNT_DEC',
  'SECOND_COUNT_INC',
  'SECOND_COUNT_DEC',
}
