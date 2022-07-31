import { atom } from 'recoil'

export const UserState = atom({
  // 제대로된 api 명세 나오면 변경
  default: {} as any,
  key: 'UserState',
})
