import { HamburgerIcon } from '@jaewoong2/dui';
import React from 'react';
import { LOGO_URL } from '../../assets';
import * as Styled from './Header.styles';

type Props = {
  logo?: string;
  onClickMenu?: () => void;
};

function Header({ logo = LOGO_URL, onClickMenu }: Props) {
  return (
    <Styled.Navigation>
      <a href="/#">
        <Styled.ImageContainer>
          <img src={logo} alt="로고 이미지" />
        </Styled.ImageContainer>
      </a>
      <Styled.MenuButton type="button" aria-label="메뉴" onClick={onClickMenu}>
        <HamburgerIcon />
      </Styled.MenuButton>
    </Styled.Navigation>
  );
}

export default Header;
