export type CardUser = {
  nickName: string
  profileImg: string
}

export type CardComment = {
  comment: string
  user: {
    nickName: string
    profileImg: string
  }
}

export type Card = {
  user: CardUser
  description: string
  images: string[]
  like: number
  comments?: CardComment[]
}

export type FeedResponse = Card[]
