import axios, { AxiosError } from 'axios'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { FeedResponse } from '../types/index'

const feedReqeuset = async () => {
  const { data } = await axios.get<FeedResponse>('/api/feed/list')

  return data
}

type QueryOptions = Omit<
  UseQueryOptions<FeedResponse, AxiosError<unknown, any>, FeedResponse, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetFeedList = (options?: QueryOptions) => {
  return useQuery<FeedResponse, AxiosError>(['feed'], feedReqeuset, {
    suspense: true,
    ...options,
  })
}

export default useGetFeedList
