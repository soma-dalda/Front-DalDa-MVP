import { useSetRecoilState } from 'recoil'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { useCallback, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { UseLoginResult, UseLoginError, LoginTo } from '../types/index'
import { UserState } from '../recoil/atoms/UserState'
import { useDebouncedCallback } from '../../../hooks/useDebouncedCallback'

type UseLoginType = {
  to: LoginTo
}

const loginRequest = async ({ to }: UseLoginType): Promise<UseLoginResult> => {
  const { data } = await axios.get<UseLoginResult>(`/login/${to}`)
  return data
}

export const useOAuthLogin = (
  { to }: UseLoginType,
  options?:
    | Omit<
        UseQueryOptions<UseLoginResult, AxiosError<UseLoginError>, UseLoginResult, QueryKey>,
        'queryKey' | 'queryFn'
      >
    | undefined
) => {
  const setUserData = useSetRecoilState(UserState)
  const queryData = useQuery<UseLoginResult, AxiosError<UseLoginError>>(
    ['login', to],
    () => loginRequest({ to }),
    options
  )

  useEffect(() => {
    if (queryData.data) {
      setUserData(queryData.data)
    }
  }, [queryData.data])

  const handleLoginClick = useCallback(() => {
    queryData.refetch()
  }, [queryData.refetch])

  const debouncedHandleLoginClick = useDebouncedCallback(handleLoginClick, 2000, true)

  return { ...queryData, handleLoginClick: debouncedHandleLoginClick }
}
