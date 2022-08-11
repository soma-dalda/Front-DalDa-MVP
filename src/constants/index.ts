export const API = {
  PATH: {
    LOGIN: {
      GETUSER: '/api/user',
      BASE: '/api/oauth2/authorization',
      KAKAO: '/api/oauth2/authorization/kakao',
      GOOGLE: '/api/oauth2/authorization/google',
      NAVER: '/api/oauth2/authorization/naver',
    },
    LOGOUT: '/api/logout',
    COMPANY: {
      GET: '/api/company',
    },
    FEED: {
      GET_FEED_LIST: '/api/feed/list',
      POST_FEED: '/api/feed',
      UPDATE_FEED: '/api/feed',
      DELETE_FEED: '/api/feed',
      // api/feed/:feedId
      UPDATE_LIKE: '/api/feed',
      // api/comment/:feedId
      POST_COMMENT: '/api/comment',
    },
    OAUTH: {
      OAUTH_REQUEST: `api/oauth/authorize`,
    },
  },
}
