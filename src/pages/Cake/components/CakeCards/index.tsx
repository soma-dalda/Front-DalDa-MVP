import React from 'react'
import { withSuspense } from '@/components'
import useGetFeedList from '../../hooks/useGetFeedList'
import CakeCard from '../CakeCard'

function CakeCards() {
  const { data } = useGetFeedList()

  return (
    <article>
      {data?.map(({ ...props }) => (
        <CakeCard {...props} />
      ))}
    </article>
  )
}

export default withSuspense(CakeCards)
