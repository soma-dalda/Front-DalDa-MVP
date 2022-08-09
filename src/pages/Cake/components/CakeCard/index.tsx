import { Image } from '@jaewoong2/dui'
import React from 'react'
import CardBody from './CardBody'
import CardComment from './CardComment'
import CardCommentForm from './CardCommentForm'
import CardHead from './CardHead'

type Props = {
  user: {
    nickName: string
    profileImg: string
  }
  description: string
  images: string[]
  like: number
  comments?: {
    comment: string
    user: {
      nickName: string
      profileImg: string
    }
  }[]
}

function CakeCard({ user, like, description, images, comments }: Props) {
  return (
    <div className="w-[calc(100%-15px)] border mt-2 rounded-lg">
      <figure className="w-full">
        <CardHead user={user} />
        <CardBody like={like} description={description} />
        <div className="w-[100%] overflow-hidden">
          <Image isLoading={false} alt="피드 이미지" src={images[0]} />
        </div>
        <CardCommentForm />
        {comments?.map((comment, i) => (
          <CardComment key={`card - ${1 + i}`} profileImg={comment.user.profileImg}>
            {comment.comment}
          </CardComment>
        ))}
      </figure>
    </div>
  )
}

export default CakeCard
