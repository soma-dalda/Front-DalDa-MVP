import { rest } from 'msw'
import { getFeeds, loginGoogle, loginKakao, loginNaver, postFeed, search } from './requests'

export const handlers = [
  rest.get('/login/naver', loginNaver),
  rest.get('/login/kakao', loginKakao),
  rest.get('/login/google', loginGoogle),
  rest.get('/api/company', search),
  rest.get('/api/feed/list', getFeeds),
  rest.post('/api/feed', postFeed),
]
