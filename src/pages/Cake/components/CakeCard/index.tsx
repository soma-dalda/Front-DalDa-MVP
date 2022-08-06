import { Image } from '@jaewoong2/dui'
import React from 'react'
import CardBody from './CardBody'
import CardHead from './CardHead'

type Props = {
  user: {
    nickName: string
    profileImg: string
  }
  description: string
  images: string[]
  like: number
}

function CakeCard({ user, like, description, images }: Props) {
  return (
    <div className="w-[calc(100%-15px)] border mt-2 rounded-lg">
      <figure className="w-full">
        <CardHead user={user} />
        <CardBody like={like} description={description} />
        <div className="w-[100%] rounded-t-none rounded-lg overflow-hidden">
          <Image isLoading={false} alt="피드 이미지" src={images[0]} />
        </div>
      </figure>
    </div>
  )
}

export default CakeCard
