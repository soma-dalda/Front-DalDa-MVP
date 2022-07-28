import React, { PropsWithChildren } from 'react';
import * as Styled from './Boxes.styles';
import { SqureButtonType } from './Boxes.type';

export function Boxes({
  children,
  ...props
}: PropsWithChildren<React.DetailsHTMLAttributes<HTMLDivElement>>) {
  return <Styled.Boxes {...props}>{children}</Styled.Boxes>;
}

function SqureButton({
  h4,
  caption,
  className,
  ...props
}: SqureButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Styled.SquareBox className={`shadow-inner ${className}`} {...props}>
      <h4 className="order">{h4}</h4>
      <span className="caption">{caption}</span>
    </Styled.SquareBox>
  );
}

function RectButton({
  h4,
  caption,
  ...props
}: SqureButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Styled.Rect {...props}>
      <h4 className="order">{h4}</h4>
      <span className="caption">{caption}</span>
    </Styled.Rect>
  );
}

Boxes.RectButton = RectButton;
Boxes.SqureButton = SqureButton;
