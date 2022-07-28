import React from 'react';
import Slick from '../../../components/Slick';
import { Carousel } from '../../../components/Slick/Carousel';

export function Banner() {
  return (
    <Slick width="100%" height="120px" length={1}>
      <Carousel
        className="shadow-sm cursor-pointer"
        alt="카로셀 이미지"
        src="https://i.ytimg.com/vi/8EIPyAFeohM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5t5jy8l6YTelDg1_2zrLfEykAOg"
      />
      <Carousel
        className="shadow-sm cursor-pointer"
        alt="카로셀 이미지"
        src="https://i.ytimg.com/vi/8EIPyAFeohM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5t5jy8l6YTelDg1_2zrLfEykAOg"
      />
      <Carousel
        className="shadow-sm cursor-pointer"
        alt="카로셀 이미지"
        src="https://i.ytimg.com/vi/8EIPyAFeohM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5t5jy8l6YTelDg1_2zrLfEykAOg"
      />
    </Slick>
  );
}
