import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import Card from '../../../components/Card'

function CakeCards() {
  return (
    <div>
      <Card
        className="mt-4 shadow-md pb-5"
        image={
          <img
            src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="생일 케이크"
            className="w-full h-full object-center object-cover cursor-pointer"
          />
        }
        caption={
          <div className="w-full flex items-center justify-between mt-3 px-2">
            <h3 className="text-sm text-gray-700">생일 케이크</h3>
            <AiOutlineHeart className="w-5 h-5 cursor-pointer" />
          </div>
        }
      />
      <Card
        className="mt-4 shadow-md pb-5"
        image={
          <img
            src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="w-full h-full object-center object-cover cursor-pointer"
          />
        }
        caption={
          <div className="w-full flex items-center justify-between mt-3 px-2">
            <h3 className="text-sm text-gray-700">Earthen Bottle</h3>
            <AiOutlineHeart className="w-5 h-5 cursor-pointer" />
          </div>
        }
      />
      <Card
        className="mt-4 shadow-md  pb-5"
        image={
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="w-full h-full object-center object-cover cursor-pointer"
          />
        }
        caption={
          <div className="w-full flex items-center justify-between mt-3 px-2">
            <h3 className="text-sm text-gray-700">Earthen Bottle</h3>
            <AiOutlineHeart className="w-5 h-5 cursor-pointer" />
          </div>
        }
      />
    </div>
  )
}

export default CakeCards
