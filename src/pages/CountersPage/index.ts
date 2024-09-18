import { lazy } from 'react';

export const LazyCounters = lazy(() => import(/* webpackChunkName: "page_counters" */ './CountersPage'));
