import React, { useState } from 'react';
import { Main, BottomSheet } from '@jaewoong2/dui';
import * as Styled from './Home.styles';
import Header from '../../components/Header';

function Home() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  return (
    <Main>
      <Styled.Column>
        <Styled.Section shadow>
          <Header onClickMenu={() => setIsBottomSheetVisible((prev) => !prev)} />
          <Styled.MainContainer>메인</Styled.MainContainer>
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
