import { rest } from 'msw'

export const handlers = [
  rest.get('/login/naver', async (_, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: {
          body: 'invalid Login',
        },
      })
    )
  }),

  rest.get('/login/kakao', async (_, res, ctx) => {
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
  }),

  rest.get('/login/google', async (_, res, ctx) => {
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
  }),
]
