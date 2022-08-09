import React from 'react'
import { Image } from '@jaewoong2/dui'

function Card({
  src,
  description,
  href,
  button,
}: {
  src: string
  description: string
  href: string
  button: string
}) {
  return (
    <div className="max-w-[100%] bg-white rounded-lg border">
      <a href={href}>
        <Image isLoading={false} className="p-8 rounded-t-lg" src={src} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href={href}>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900">{description}</h5>
        </a>

        <button aria-label="바로가기" type="button" className="flex justify-end mt-4 flex-col">
          <a
            href={href}
            className="bg-[#FBF7F2] hover:outline outline-gray-300 
            focus:ring-4 focus:outline font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {button}
          </a>
        </button>
      </div>
    </div>
  )
}

export default React.memo(Card)
