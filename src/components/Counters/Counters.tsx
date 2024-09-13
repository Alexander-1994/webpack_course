import { useContext } from 'react';

import { context, type TContext, EActionType } from '../../common';
import classes from './Counters.module.sass';

export const Counters = () => {
  const { state, dispatch } = useContext(context) as TContext;
  const { firstCount, secondCount } = state;

  return (
    <div className={classes.counters}>
      <div className={classes.item}>
        <h2 className={classes.title}>First</h2>
        <h3 className={classes.value}>{firstCount}</h3>
        <button onClick={() => dispatch({ type: EActionType.FIRST_COUNT_INC })}>INC</button>
        <button onClick={() => dispatch({ type: EActionType.FIRST_COUNT_DEC })}>DEC</button>
      </div>

      <div className={classes.item}>
        <h2 className={classes.title}>Second</h2>
        <h3 className={classes.value}>{secondCount}</h3>
        <button onClick={() => dispatch({ type: EActionType.SECOND_COUNT_INC })}>INC</button>
        <button onClick={() => dispatch({ type: EActionType.SECOND_COUNT_DEC })}>DEC</button>
      </div>
    </div>
  );
};
