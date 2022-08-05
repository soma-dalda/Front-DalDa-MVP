import { selector } from 'recoil'
import { UserState } from '../atoms/UserState'

export const UserSelector = selector({
  key: 'UserSelector',
  get: ({ get }) => {
    const userState = get(UserState)

    return {
      isLoggedIn: !!userState?.user?.profile?.nickname,
      userState,
    }
  },
})
