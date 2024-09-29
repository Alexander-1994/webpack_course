import { useReducer, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { context, reducer, INITIAL_STATE, ROUTES } from '@/common';
import { ErrorBoundary, Loader } from '@/components';
import { LazyHome, LazyCounters, LazyImages } from '@/pages';

export const App = () => {
  const { Provider } = context;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <BrowserRouter>
      <Provider value={{ state, dispatch }}>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={ROUTES.MAIN} element={<LazyHome />} />
              <Route path={ROUTES.COUNTERS} element={<LazyCounters />} />
              <Route path={ROUTES.IMAGES} element={<LazyImages />} />
              <Route path={ROUTES.ANY} element={<Navigate to={ROUTES.MAIN} replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  );
};
