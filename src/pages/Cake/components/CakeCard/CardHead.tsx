import React from 'react'
import Avatar from '../Avatar'

type Props = {
  user: {
    profileImg: string
    nickName: string
  }
}

function CardHead({ user }: Props) {
  return (
    <div className="w-[100%] flex items-center">
      <Avatar className="ml-2 mt-2" image={user.profileImg} />
      <p className="ml-2 mt-2 text-sm flex items-center text-slate-800">{user.nickName}</p>
    </div>
  )
}

export default CardHead
