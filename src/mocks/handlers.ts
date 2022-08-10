import { API } from '@/constants'
import { rest } from 'msw'
import { getFeeds, loginGoogle, loginKakao, loginNaver, logout, postFeed, search } from './requests'

export const handlers = [
  rest.get(API.PATH.LOGIN.NAVER, loginNaver),
  rest.get(API.PATH.LOGIN.KAKAO, loginKakao),
  rest.get(API.PATH.LOGIN.GOOGLE, loginGoogle),
  rest.delete(API.PATH.LOGOUT, logout),
  rest.get(API.PATH.COMPANY.GET, search),
  rest.get(API.PATH.FEED.GET_FEED_LIST, getFeeds),
  rest.post(API.PATH.FEED.POST_FEED, postFeed),
]
