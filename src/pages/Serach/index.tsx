import React, { useEffect } from 'react'

import { useSearch } from '@/features/search/hooks/useSearchQuery'
import { useInternalRouter } from '@/hooks/useInternalRouter'
import { useQueryString } from '@/hooks/useQueryString'

import { withSuspense } from '@/components'
import { SearchForm, Card } from './components'
import SkeletonCards from './components/Skeleton/SkeletonCards'

function Search() {
  const query = useQueryString('query')
  const { refetch, data } = useSearch(query, {})
  const { goBack } = useInternalRouter()

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <div className="ml-[15px] mt-3 w-[calc(100%-15px)]">
      <SearchForm onButtonClick={goBack} />
      <div className="grid grid-cols-2 w-[calc(100%-15px)]  gap-[5px] mt-4">
        {Array(10)
          .fill(data)
          .map((v, i) => (
            <Card key={`card-${0 + i}`} href="/" button="바로가기" {...v} />
          ))}
      </div>
    </div>
  )
}

export default withSuspense(React.memo(Search), <SkeletonCards number={10} />)
