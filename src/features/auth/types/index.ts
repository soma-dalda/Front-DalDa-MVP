export type LoginTo = 'naver' | 'google' | 'kakao'

export type UseLoginResult = {
  user: {
    profile: {
      nickname: string
    }
    email: string
    phone_number: string
  }
}

export type UseLoginError = {
  error: {
    body: string
  }
}
