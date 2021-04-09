import { rest } from 'msw'

export const handlers = [
  rest.get('https://any-api.com:8443/http://xkcd.com/info.0.json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        img: 'test-src',
      }),
    )
  }),
]
