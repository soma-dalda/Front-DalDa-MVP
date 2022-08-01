import axios, { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { SearchDataResponse } from '../types/index'
import { useDebouncedCallback } from '../../../hooks/useDebouncedCallback'

const searchRequest = async (keyword: string) => {
  const { data } = await axios.get<SearchDataResponse>(`/search?keyword=${keyword}`)

  return data
}

export const useSearch = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const [queryKey, setQueryKey] = useState<string>()
  const queryData = useQuery<SearchDataResponse, AxiosError>(
    ['search', queryKey],
    () => searchRequest(value),
    {
      enabled: false,
      useErrorBoundary: false,
      suspense: true,
      refetchOnMount: false,
    }
  )
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = useCallback(
    (e?: React.FormEvent) => {
      console.log(e)
      e?.preventDefault()
      setQueryKey(value)
      queryData.refetch()
    },
    [value, queryData]
  )

  const debouncedOnSubmit = useDebouncedCallback(onSubmit, 1000, true)

  return { value, setValue, onChangeValue, onSubmit: debouncedOnSubmit, queryData } as const
}
