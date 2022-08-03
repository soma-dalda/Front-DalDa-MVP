import { useSetRecoilState } from 'recoil'
import { useQueryClient } from 'react-query'
import { defaultValue, UserState } from '../recoil/atoms/UserState'

export const useOAuthLogout = () => {
  const setUserData = useSetRecoilState(UserState)
  const queryClient = useQueryClient()

  return {
    logout: () => {
      queryClient.removeQueries('login')
      setUserData({ ...defaultValue })
    },
  }
}
