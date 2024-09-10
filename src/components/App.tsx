import { lazy, useReducer, Suspense } from 'react';

import { context, reducer, INITIAL_STATE } from '../common';
import { ErrorBoundary } from './ErrorBoundary';
import { Loader } from './Loader';

// Let's imagine that "Counters" is a heavy, basic component of our react-application
const LazyCounters = lazy(() => import('./Counters'));

export const App = () => {
  const { Provider } = context;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Provider value={{ state, dispatch }}>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <LazyCounters />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  );
};
