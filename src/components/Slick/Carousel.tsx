import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import Image from '../Image'

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 30px);
  height: 150px;
  background-color: ${({ theme }) => theme.color.searchInputBG};
  border-radius: 5px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

const CarouselImage = styled(Image)`
  width: auto;
  height: 100%;
  z-index: 2;
`

type CarouselProps = {
  src: string
  alt: string
}

export function Carousel({
  src,
  alt,
  ...props
}: PropsWithChildren<CarouselProps & React.DetailsHTMLAttributes<HTMLDivElement>>) {
  return (
    <CarouselContainer {...props}>
      <ImageContainer>
        <CarouselImage data-src={src} alt={alt} loading="lazy" />
      </ImageContainer>
    </CarouselContainer>
  )
}
