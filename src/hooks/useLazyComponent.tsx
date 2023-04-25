import React from 'react';

export const useLazyComponent = (componentPath: string) => {
  const LazyComponent = React.lazy(
    () => import(`../components/${componentPath}.js`)
  );

  function ComponentWithSuspense(props: any) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  }

  return ComponentWithSuspense;
};
