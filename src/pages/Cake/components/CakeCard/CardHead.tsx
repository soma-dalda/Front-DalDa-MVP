import React from 'react'
import { CardUser } from '../../types'
import Avatar from '../Avatar'

type Props = {
  user: CardUser
}

function CardHead({ user }: Props) {
  return (
    <div className="w-[100%] flex items-center">
      <Avatar className="ml-2 mt-2" image={user.profile?.profileImg} />
      <p className="ml-2 mt-2 text-sm flex items-center text-slate-800">{user.profile?.nickName}</p>
    </div>
  )
}

export default CardHead
