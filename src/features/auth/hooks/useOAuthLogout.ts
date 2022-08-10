import { useSetRecoilState } from 'recoil'
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query'
import axios from 'axios'
import { API } from '@/constants'
import { defaultValue, UserState } from '../recoil/atoms/UserState'

const logout = async () => {
  const { data } = await axios.delete(API.PATH.LOGOUT)

  return data
}

export const useOAuthLogout = (options?: UseMutationOptions) => {
  const setUserData = useSetRecoilState(UserState)
  const queryClient = useQueryClient()
  const { mutate } = useMutation(logout, { ...options })

  return {
    handleLogout: () => {
      queryClient.removeQueries('login')
      setUserData({ ...defaultValue })
      mutate()
    },
  }
}
