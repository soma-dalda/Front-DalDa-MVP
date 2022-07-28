import React, { useMemo } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;

  slidesToShow?: number;

  width: string;
  height: string;

  length: number;
}

function Slick({ children, speed = 700, slidesToShow = 1, length }: SliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      centerMode: false,
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      arrows: false,
      length,
      speed,
      slidesToShow,
    }),
    [speed, slidesToShow, length]
  );

  return <Slider {...settings}>{children}</Slider>;
}

export default Slick;
