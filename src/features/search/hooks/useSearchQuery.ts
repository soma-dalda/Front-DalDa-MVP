import axios, { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
import { useQuery, UseQueryOptions } from 'react-query'
import { SearchDataResponse } from '../types/index'
import { useDebouncedCallback } from '../../../hooks/useDebouncedCallback'

const searchRequest = async (keyword: string) => {
  const { data } = await axios.get<SearchDataResponse>(`/search?keyword=${keyword}`)

  return data
}

export const useSearch = (
  searchQueryKey: string,
  { ...options }: Omit<UseQueryOptions<SearchDataResponse, AxiosError>, 'queryKey' | 'queryFn'>
) => {
  const [queryKey, setQueryKey] = useState<string>()
  const queryData = useQuery<SearchDataResponse, AxiosError>(
    ['search', queryKey],
    () => searchRequest(queryKey ?? ''),
    {
      enabled: !!queryKey,
      useErrorBoundary: false,
      suspense: true,
      refetchOnMount: false,
      ...options,
    }
  )

  const onSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      setQueryKey(searchQueryKey)
      queryData.refetch()
    },
    [searchQueryKey]
  )

  const debouncedOnSubmit = useDebouncedCallback(onSubmit, 1000, true)

  return {
    onSubmit: debouncedOnSubmit,
    queryData,
  } as const
}
