import { API } from '@/constants'
import axios, { AxiosError } from 'axios'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { UseLoginResult } from '../types'

const getUserByTokenRequest = async (token: string | null) => {
  if (!token) {
    throw new AxiosError('유효하지 않은 토큰')
  }

  const { data } = await axios.get<UseLoginResult>(API.PATH.LOGIN.GETUSER, {
    headers: {
      'set-cookie': `access-token=${token}`,
    },
  })

  return data
}

type QueryOption = Omit<
  UseQueryOptions<UseLoginResult, AxiosError<unknown, any>, UseLoginResult, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetUserByToken = (token: string | null, options?: QueryOption) => {
  return useQuery<UseLoginResult, AxiosError>(
    ['login', 'user'],
    () => getUserByTokenRequest(token),
    { ...options }
  )
}

export default useGetUserByToken
