import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './Home.styles'
import { Banner } from './Banner'
import { Search } from './Search'
import { Boxes, Boxes as MainOrderButtons } from './Boxes'

// const getLocation = () => {
//   if (navigator.geolocation) {
//     // GPS를 지원하면
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         // position 객체 내부에 timestamp(현재 시간)와 coords 객체
//         const time = new Date(position.timestamp);
//         console.log(position);
//         console.log(`현재시간 : ${time}`);
//         console.log(`latitude 위도 : ${position.coords.latitude}`);
//         console.log(`longitude 경도 : ${position.coords.longitude}`);
//         console.log(`altitude 고도 : ${position.coords.altitude}`);
//       },
//       (error) => {
//         console.error(error);
//       },
//       {
//         enableHighAccuracy: false,
//         maximumAge: 0,
//         timeout: Infinity,
//       }
//     );
//   } else {
//     alert('GPS를 지원하지 않습니다');
//   }
// };

function Home() {
  return (
    <Styled.MainContainer>
      <Banner />
      <Styled.MainWrapper>
        <Search
          title={
            <h3>
              <b>주문 제작케이크</b>를 주문하고 싶으면?
            </h3>
          }
        />
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
