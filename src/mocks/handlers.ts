import { rest } from 'msw'
import { loginGoogle, loginKakao, loginNaver, search } from './requests'

export const handlers = [
  rest.get('/login/naver', loginNaver),
  rest.get('/login/kakao', loginKakao),
  rest.get('/login/google', loginGoogle),
  rest.get('/search', search),
]
