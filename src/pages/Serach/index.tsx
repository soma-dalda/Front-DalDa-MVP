import React, { useEffect } from 'react'
import Card from './components/Card'
import { useSearchForm } from '../../features/search/hooks/useSearchForm'
import { useSearch } from '../../features/search/hooks/useSearchQuery'
import SearchForm from './components/SearchForm'
import { useQueryString } from '../../hooks/useQueryString'
import { withSuspense } from '../../components/withSuspense'
import SkeletonCards from './components/Skeleton/SkeletonCards'
import { useInternalRouter } from '../../hooks/useInternalRouter'

function Search() {
  const keyword = useQueryString('keyword')
  const { refetch, data } = useSearch(keyword, {})
  const { value, handleSubmit, handleChange } = useSearchForm('')
  const { goBack } = useInternalRouter()

  useEffect(() => {
    refetch()
  }, [keyword])

  return (
    <div className="ml-[15px] mt-3 w-[calc(100%-15px)]">
      <SearchForm
        onButtonClick={goBack}
        onSubmit={handleSubmit}
        value={value}
        onChangeValue={handleChange}
      />
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

export default withSuspense(Search, <SkeletonCards number={10} />)
