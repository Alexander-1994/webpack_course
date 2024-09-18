import { lazy } from 'react';

export const LazyHome = lazy(() => import(/* webpackChunkName: "page_home" */ './HomePage'));
