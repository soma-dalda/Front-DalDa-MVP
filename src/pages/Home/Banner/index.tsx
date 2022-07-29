import React from 'react'
import { BANNER_IMAGES } from '../../../assets'
import Slick from '../../../components/Slick'
import { Carousel } from '../../../components/Slick/Carousel'

export function Banner() {
  return (
    <Slick width="100%" height="120px" length={1}>
      {BANNER_IMAGES.map((src, i) => (
        <Carousel
          key={`카로셀 ${i.toString()}`}
          className="shadow-sm cursor-pointer"
          alt="카로셀 이미지"
          src={src}
        />
      ))}
    </Slick>
  )
}
