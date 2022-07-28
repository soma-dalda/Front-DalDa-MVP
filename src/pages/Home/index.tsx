import React, { useState } from 'react';
import { Main, BottomSheet, FooterDalda } from '@jaewoong2/dui';
// import { BiCake } from 'react-icons/bi';
// import { FiCoffee } from 'react-icons/fi';

import * as Styled from './Home.styles';
import Header from '../../components/Header';
import { Banner } from './Banner';
import { Search } from './Search';
import { Boxes, Boxes as MainOrderButtons } from './Boxes';
// import { Carousel } from '../../components/Slick/Carousel';

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
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  return (
    <Main>
      <Styled.Column>
        <Styled.Section className="shadow-2xl">
          <Header onClickMenu={() => setIsBottomSheetVisible((prev) => !prev)} />
          <Banner />
          <Styled.MainContainer>
            <Search
              title={
                <h3>
                  <b>주문 제작케이크</b>를 주문하고 싶으면?
                </h3>
              }
            />
            <MainOrderButtons />
            <Boxes>
              <Boxes.SqureButton className="cake" h4="주문제작" caption="케이크 구경하기" />
              <Boxes.SqureButton className="cafe" h4="주문제작" caption="카페 구경하기" />
            </Boxes>
            <Boxes>
              <Boxes.RectButton h4="#케이크 피드" caption="케이크 게시글 보러가기" />
            </Boxes>
          </Styled.MainContainer>
          <FooterDalda />
        </Styled.Section>
        <BottomSheet
          visible={isBottomSheetVisible}
          setVisible={setIsBottomSheetVisible}
          defaultHeight="400px"
        />
      </Styled.Column>
    </Main>
  );
}

export default Home;
