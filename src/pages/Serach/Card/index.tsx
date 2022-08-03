import { Image } from '@jaewoong2/dui'
import React from 'react'

function Card() {
  return (
    <div className="max-w-[100%] bg-white rounded-lg border">
      <a href="/">
        <Image
          isLoading={false}
          className="p-8 rounded-t-lg"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className="flex justify-end mt-4 flex-col">
          <a
            href="/"
            className="bg-[#FBF7F2] hover:outline outline-gray-300 
            focus:ring-4 focus:outline font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
          >
            바로가기
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
