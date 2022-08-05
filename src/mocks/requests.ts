import {
  DefaultBodyType,
  MockedResponse,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw'

type API = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => Promise<MockedResponse<DefaultBodyType>>

export const loginNaver: API = async (_, res, ctx) => {
  return res(
    ctx.status(400),
    ctx.json({
      error: {
        body: 'invalid Login',
      },
    })
  )
}

export const loginKakao: API = async (_, res, ctx) => {
  return res(
    ctx.delay(4000),
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
      keyword: decodeURIComponent(params.get('keyword') ?? ''),
      src: 'https://flowbite.com/docs/images/products/apple-watch.png',
      description: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    })
  )
}
