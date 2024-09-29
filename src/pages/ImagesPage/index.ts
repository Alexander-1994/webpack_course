import { lazy } from 'react';

export const LazyImages = lazy(() => import(/* webpackChunkName: "page_images" */ './ImagesPage'));
