import React, { Suspense } from 'react'
import Search from '.'
import SkeletonCards from './Skeleton/SkeletonCards'

function ConnectedSearch() {
  return (
    <Suspense fallback={<SkeletonCards number={10} />}>
      <Search />
    </Suspense>
  )
}

export default ConnectedSearch
