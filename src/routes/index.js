import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '../styles';

const LazyHome = lazy(() => import('../Home'));
const LazySlotGame = lazy(() => import('../SlotGame/SlotGame'));

const LazyLoadedHome = () => (
  <Suspense fallback={<LoadingSpinner className="lds-udal-ring" />}>
    <LazyHome />
  </Suspense>
);

const LazyLoadedSlotGame = () => (
  <Suspense fallback={<LoadingSpinner className="lds-udal-ring" />}>
    <LazySlotGame />
  </Suspense>
);

export {
  LazyLoadedHome as Home,
  LazyLoadedSlotGame as SlotGame,
}
