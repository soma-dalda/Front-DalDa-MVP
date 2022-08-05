import React from 'react'
import SearchForm from '../SearchForm'
import SkeletonCard from './SkeletonCard'

function SkeletonCards({ number }: { number: number }) {
  return (
    <div className="ml-[15px] mt-3 w-[calc(100%-15px)]">
      <SearchForm disabled />
      <div className="grid grid-cols-2 w-[calc(100%-15px)]  gap-[5px] mt-4">
        {Array(number)
          .fill(0)
          .map((v, i) => (
            <SkeletonCard key={`skeleton-${v + i}$`} />
          ))}
      </div>
    </div>
  )
}

export default SkeletonCards
