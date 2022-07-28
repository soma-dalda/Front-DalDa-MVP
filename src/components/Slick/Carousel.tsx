import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 30px);
  height: 150px;
  background-color: ${({ theme }) => theme.color.searchInputBG};
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
`;

type CarouselProps = {
  src: string;
  alt: string;
};

export function Carousel({
  src,
  alt,
  ...props
}: PropsWithChildren<CarouselProps & React.DetailsHTMLAttributes<HTMLDivElement>>) {
  return (
    <CarouselContainer {...props}>
      <ImageContainer>
        <Image src={src} alt={alt} />
      </ImageContainer>
    </CarouselContainer>
  );
}
