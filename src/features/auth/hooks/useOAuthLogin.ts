import { useSetRecoilState } from 'recoil'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { useCallback, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { UseLoginResult, UseLoginError, LoginTo } from '../types/index'
import { UserState } from '../recoil/atoms/user'

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
        UseQueryOptions<
          Promise<UseLoginResult>,
          AxiosError<UseLoginError>,
          Promise<UseLoginResult>,
          QueryKey
        >,
        'queryKey' | 'queryFn'
      >
    | undefined
) => {
  const setUserData = useSetRecoilState(UserState)

  const queryData = useQuery<Promise<UseLoginResult>, AxiosError<UseLoginError>>(
    ['login', to],
    () => loginRequest({ to }),
    options
  )

  useEffect(() => {
    setUserData(queryData.data)
  }, [queryData.data])

  const handleLoginClick = useCallback(() => {
    queryData.refetch()
  }, [queryData.refetch])

  return { ...queryData, handleLoginClick }
}
