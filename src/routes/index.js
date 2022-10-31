import { lazy, Suspense } from 'react';

const LazyImportHome = lazy(() => import('../Home'));
const LazyImportSlotGame = lazy(() => import('../SlotGame/SlotGame'));

const HomeLazy = () => (
  <Suspense fallback={null}>
    <LazyImportHome />
  </Suspense>
);

const SlotGameLazy = () => (
  <Suspense fallback={null}>
    <LazyImportSlotGame />
  </Suspense>
);

export {
  HomeLazy,
  SlotGameLazy,
}
