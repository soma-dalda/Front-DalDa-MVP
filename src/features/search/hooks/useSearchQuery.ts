import axios, { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
import { useQuery, UseQueryOptions } from 'react-query'
import { API } from '../../../constants/index'
import { SearchDataResponse } from '../types/index'
import { useDebouncedCallback } from '../../../hooks/useDebouncedCallback'

const searchRequest = async (query: string) => {
  const { data } = await axios.get<SearchDataResponse>(`${API.PATH.COMPANY.GET}?query=${query}`)

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

  const refetch = useCallback(() => {
    setQueryKey(searchQueryKey)
    queryData.refetch()
  }, [searchQueryKey])

  const debouncedRefetch = useDebouncedCallback(refetch, 1000, true)

  return {
    ...queryData,
    refetch: debouncedRefetch,
  } as const
}
