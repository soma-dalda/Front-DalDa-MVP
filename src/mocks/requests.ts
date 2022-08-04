import { DefaultBodyType, PathParams, ResponseComposition, RestContext, RestRequest } from 'msw'

export const loginNaver = async (
  _: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  return res(
    ctx.status(400),
    ctx.json({
      error: {
        body: 'invalid Login',
      },
    })
  )
}

export const loginKakao = async (
  _: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
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

export const loginGoogle = async (
  _: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
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

export const search = async (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
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
