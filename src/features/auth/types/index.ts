export type LoginTo = 'naver' | 'google' | 'kakao'

export type UseLoginResult = {
  user: {
    profile: {
      nickname: string | null
    }
    email: string | null
    phone_number: string | null
  }
}

export type UseLoginError = {
  error: {
    body: string
  }
}
