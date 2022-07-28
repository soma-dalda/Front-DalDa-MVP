import styled from '@emotion/styled'

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #fff;

  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 5px #00000025;
`

export const ImageContainer = styled.figure`
  width: 120px;
`

export const MenuButton = styled.button`
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 1em;
`
