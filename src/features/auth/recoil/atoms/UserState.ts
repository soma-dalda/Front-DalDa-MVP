import { atom } from 'recoil'
import { UseLoginResult } from '../../types'

export const defaultValue: UseLoginResult = {
  user: {
    profile: {
      nickname: null,
    },
    email: null,
    phone_number: null,
  },
}

export const UserState = atom({
  // 제대로된 api 명세 나오면 변경
  default: defaultValue,
  key: 'UserState',
})
