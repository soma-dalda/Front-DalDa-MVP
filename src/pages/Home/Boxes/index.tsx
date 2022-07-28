import React, { PropsWithChildren } from 'react';
import * as Styled from './Boxes.styles';
import { SqureButtonType } from './Boxes.type';

export function Boxes({ children }: PropsWithChildren) {
  return <Styled.Boxes>{children}</Styled.Boxes>;
}

/* <Styled.SquareBox className="shadow-inner cake">
        <h4 className="order">주문 제작</h4>
        <span className="caption">케이크 구경하기</span>
      </Styled.SquareBox>
      <Styled.SquareBox tabIndex={0} className="shadow-inner cafe">
        <h4 className="order">주문 제작</h4>
        <span className="caption">카페 구경하기</span>
      </Styled.SquareBox> */

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
