export type CardUser = {
  profile?: {
    nickName: string
    profileImg: string
  }
}

export type CardComment = {
  comment: string
  user: CardUser
}

export type Card = {
  id?: string
  user: CardUser
  description: string
  images: string[]
  like: number
  comments?: CardComment[]
}

export type FeedResponse = Card[]
