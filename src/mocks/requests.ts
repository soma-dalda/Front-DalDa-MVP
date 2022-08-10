import { FeedResponse } from '@/pages/Cake/types'
import {
  DefaultBodyType,
  MockedResponse,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw'
import { FEED_RESPONSE } from './constant'

type API = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => Promise<MockedResponse<DefaultBodyType>>

const loginBase = (type: 'error' | 'success' | 'delay', ctx: RestContext) => {
  if (type === 'error') {
    return [ctx.status(400)]
  }
  if (type === 'delay') {
    return [ctx.delay(2000), ctx.cookie('access-token', 'd2f1285d-9f45-4c4c-bb5a-2f919d6de1ce')]
  }

  return [ctx.status(200), ctx.cookie('access-token', 'd2f1285d-9f45-4c4c-bb5a-2f919d6de1ce')]
}

export const logout: API = async (_, res, ctx) => {
  return res(ctx.status(200), ctx.cookie('acceess-token', ''))
}

export const loginNaver: API = async (_, res, ctx) => {
  return res(
    ...loginBase('error', ctx),
    ctx.json({
      error: {
        body: 'invalid Login',
      },
    })
  )
}

export const loginKakao: API = async (_, res, ctx) => {
  return res(
    ...loginBase('delay', ctx),
    ctx.json({
      user: {
        profile: {
          nickname: 'kakao',
        },
        email: 'dalda@kakao.com',
        phone_number: '010-1234-5678',
      },
    })
  )
}

export const loginGoogle: API = async (_, res, ctx) => {
  return res(
    ...loginBase('success', ctx),
    ctx.json({
      user: {
        profile: {
          nickname: 'google',
        },
        email: 'dalda@google.com',
        phone_number: '010-1234-5678',
      },
    })
  )
}

export const search: API = async (req, res, ctx) => {
  const params = new URLSearchParams(req.url.search)
  return res(
    ctx.delay(2000),
    ctx.json({
      keyword: decodeURIComponent(params.get('query') ?? ''),
      src: 'https://flowbite.com/docs/images/products/apple-watch.png',
      description: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    })
  )
}

export const getFeeds: API = async (_, res, ctx) => {
  return res(ctx.delay(2000), ctx.json<FeedResponse>(FEED_RESPONSE))
}

export const postFeed: API = async (req, res, ctx) => {
  const { description } = await req.json()
  const feed = {
    key: Math.floor(Math.random() * 250 + 250),
    user: { nickName: '닉네임', profileImg: 'https://i.pravatar.cc/210' },
    like: Math.floor(Math.random() * 999),
    description,
    images: [`https://picsum.photos/450/${Math.floor(Math.random() * 250 + 250)}`],
    comments: [],
  }

  FEED_RESPONSE.unshift(feed)

  return res(ctx.status(200))
}

export const postComment: API = async (req, res, ctx) => {
  const { id } = req.params

  return res(ctx.status(200), ctx.json({ id, ...req.json() }))
}
