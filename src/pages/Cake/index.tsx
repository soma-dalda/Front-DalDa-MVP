import React from 'react';
import * as Styled from './Cake.styles';
import CakeCards from './CakeCards';

function Cake() {
  return (
    <Styled.MainContainer>
      <Styled.MainWrapper>
        <CakeCards />
      </Styled.MainWrapper>
    </Styled.MainContainer>
  );
}

export default Cake;
