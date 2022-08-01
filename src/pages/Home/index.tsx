import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './Home.styles'
import { Banner } from './Banner'
import { Boxes, Boxes as MainOrderButtons } from './Boxes'
import SearchContainer from '../../features/search/components/SearchContainer'

function Home() {
  return (
    <Styled.MainContainer>
      <Banner />
      <Styled.MainWrapper>
        <SearchContainer />

        <MainOrderButtons />
        <Boxes className="gap-5">
          <Link className="w-full pt-2" to="/search">
            <Boxes.SqureButton className="cake pt-2" h4="주문제작" caption="케이크 구경하기" />
          </Link>
          <Link className="w-full pt-2" to="/">
            <Boxes.SqureButton className="cafe pt-2" h4="주문제작" caption="카페 구경하기" />
          </Link>
        </Boxes>
        <Boxes>
          <Link className="w-full" to="/cake">
            <Boxes.RectButton h4="#케이크 피드" caption="케이크 게시글 보러가기" />
          </Link>
        </Boxes>
      </Styled.MainWrapper>
    </Styled.MainContainer>
  )
}

export default Home
