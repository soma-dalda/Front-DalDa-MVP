import React, { Suspense } from 'react'

function withSuspense(
  WrappedComponent: React.ComponentType,
  fallback: React.SuspenseProps['fallback'] = null
) {
  function ComponentWithSuspense() {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent />
      </Suspense>
    )
  }

  return ComponentWithSuspense
}

export default withSuspense
