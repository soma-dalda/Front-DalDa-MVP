import React from 'react'
import { Search as DSearch } from '@jaewoong2/dui'
import * as Styled from './Search.styles'

type Props = {
  title?: React.ReactNode | JSX.Element
}

export function Search({
  title,
  className,
  ...props
}: Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'title'>) {
  return (
    <Styled.SearchContaeinr>
      <Styled.SearchTitle>{title}</Styled.SearchTitle>
      <DSearch
        placeholder="우리동네 케이크를 검색하세요"
        className={`search ${className}`}
        {...props}
      />
    </Styled.SearchContaeinr>
  )
}
