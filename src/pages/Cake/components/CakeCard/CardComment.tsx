import React, { PropsWithChildren } from 'react'
import Avatar from '../Avatar'

type Props = {
  profileImg?: string
}

function CardComment({ profileImg, children }: PropsWithChildren<Props>) {
  return (
    <div className="w-[calc(100%-15px)] flex ml-[15px] mt-[10px] mb-3 items-center">
      <Avatar image={profileImg} className="mr-2" />
      <div>{children}</div>
    </div>
  )
}

export default CardComment
