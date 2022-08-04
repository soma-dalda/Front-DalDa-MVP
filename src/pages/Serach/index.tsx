import React, { useEffect } from 'react'
import Card from './Card'
import { useSearchForm } from '../../features/search/hooks/useSearchForm'
import { useSearch } from '../../features/search/hooks/useSearchQuery'
import SearchForm from './SearchForm'
import { useQueryString } from '../../hooks/useQueryString'

function Search() {
  const keyword = useQueryString('keyword')
  const { refetch, data } = useSearch(keyword, {})
  const [value, , onChangeValue] = useSearchForm(keyword)

  // React-router-dom 은 같은 컴포넌트 내에서 URL 을 변경 시킬 때,
  // 키값이 같으면 Re-render를 시키지 않는다.
  // 따라서, 키 값을 변경 시키거나 (v6 되면서 방법 찾지못함)
  // React-Router-Dom 을 통해 변경 되는 부분을 찾아 useEffect 의존배열에 찾아 넣어준다
  useEffect(() => {
    refetch()
  }, [keyword])

  return (
    <div className="ml-[15px] mt-3 w-[calc(100%-15px)]">
      <SearchForm value={value} onChangeValue={onChangeValue} />
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

export default Search
