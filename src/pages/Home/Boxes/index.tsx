import React, { PropsWithChildren } from 'react'
import * as Styled from './Boxes.styles'
import { SqureButtonType } from './Boxes.type'

export function Boxes({
  children,
  ...props
}: PropsWithChildren<React.DetailsHTMLAttributes<HTMLDivElement>>) {
  return <Styled.Boxes {...props}>{children}</Styled.Boxes>
}

function SqureButton({
  h4,
  caption,
  className,
  ...props
}: SqureButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Styled.SquareBox className={`shadow-inner ${className}`} {...props}>
      <h4 className="order ml-3 text-lg font-bold">{h4}</h4>
      <span className="caption ml-3 text-sm text-gray-700 ">{caption}</span>
    </Styled.SquareBox>
  )
}

function RectButton({
  h4,
  caption,
  className,
  ...props
}: SqureButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Styled.Rect className={`${className}`} {...props}>
      <h4 className="order font-bold ">{h4}</h4>
      <span className="caption text-gray-700">{caption}</span>
    </Styled.Rect>
  )
}

Boxes.RectButton = RectButton
Boxes.SqureButton = SqureButton
