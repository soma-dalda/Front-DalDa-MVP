import React from 'react'
import * as Styled from './Card.styles'

type CardProps = {
  href?: string
  image?: React.ReactNode
  caption?: React.ReactNode
  className?: string
}

function Card({ image, caption, href, className }: CardProps) {
  return (
    <a href={href} className="group">
      <Styled.CardWrapper
        className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ${className}`}
      >
        <Styled.Caption>{caption}</Styled.Caption>
        {image}
      </Styled.CardWrapper>
    </a>
  )
}

export default Card
