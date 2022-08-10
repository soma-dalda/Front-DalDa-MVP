export type LoginTo = 'naver' | 'google' | 'kakao'

export type UseLoginResult = {
  user: {
    profile: {
      nickname: string | null
    }
    email: string | null
    phone_number: string | null
  }
  token: string
}

export type UseLoginError = {
  error: {
    body: string
  }
}
