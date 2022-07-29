import { useQuery } from 'react-query'
import { LoginTo } from '../types'

type UseLoginType = {
  to: LoginTo
}

const loginRequest = async <T>(to: LoginTo, options?: RequestInit): Promise<T> => {
  const data = await fetch(`/login/${to}`, options)
  return data.json()
}

export const useLogin = <T>({ to }: UseLoginType, options?: RequestInit) => {
  return useQuery<Promise<T>, Error>(['login', to], () => loginRequest<T>(to, options))
}
