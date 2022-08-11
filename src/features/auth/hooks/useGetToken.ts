import { useRecoilValue } from 'recoil'
import { UserState } from '../recoil/atoms/UserState'

const useGetToken = () => {
  const { token } = useRecoilValue(UserState)
  if (!token) {
    const cookieToken = document.cookie.split(/access-token/g)[1]
    if (cookieToken) {
      return cookieToken
    }
    return null
  }
  return token
}

export default useGetToken
