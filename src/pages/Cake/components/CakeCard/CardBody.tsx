import React from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'

type Props = {
  description: string
  like: number
}

function CardBody({ description, like }: Props) {
  return (
    <>
      <div className="w-full text-sm ml-2 mt-2">{description}</div>
      <div className="w-full text-sm flex justify-end">
        <p className="mr-1 text-sm text-gray-700">{like}</p>
        <AiTwotoneHeart color="red" className="w-5 h-5 mr-2" />
      </div>
    </>
  )
}

export default CardBody
