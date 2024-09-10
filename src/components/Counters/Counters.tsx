import { useContext } from 'react';
import { context, type TContext, EActionType } from '../../common';
import './styles.sass';

export const Counters = () => {
  const { state, dispatch } = useContext(context) as TContext;
  const { firstCount, secondCount } = state;

  return (
    <div className="counters">
      <div className="counters__item">
        <h2 className="counters__title">First</h2>
        <h3 className="counters__value">{firstCount}</h3>
        <button onClick={() => dispatch({ type: EActionType.FIRST_COUNT_INC })}>INC</button>
        <button onClick={() => dispatch({ type: EActionType.FIRST_COUNT_DEC })}>DEC</button>
      </div>

      <div className="counters__item">
        <h2 className="counters__title">Second</h2>
        <h3 className="counters__value">{secondCount}</h3>
        <button onClick={() => dispatch({ type: EActionType.SECOND_COUNT_INC })}>INC</button>
        <button onClick={() => dispatch({ type: EActionType.SECOND_COUNT_DEC })}>DEC</button>
      </div>
    </div>
  );
};
