import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

type Props = {
  image?: string
}

function Avatar({ image, className, ...props }: Props & React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-full border w-fit p-1 border-slate-200 bg-violet-100 ${className}`}
      {...props}
    >
      {image ? (
        <div className="w-[24px] h-[24px]">
          <img className="w-auto" alt="유저 프로필" src={image} />
        </div>
      ) : (
        <AiOutlineUser className="w-auto h-auto" />
      )}
    </div>
  )
}

export default React.memo(Avatar)
