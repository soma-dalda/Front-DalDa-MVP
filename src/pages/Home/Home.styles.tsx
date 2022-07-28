import styled from '@emotion/styled';
import { Main } from '@jaewoong2/dui';

export const Column = styled(Main.Column)`
  background-color: #fff;
  height: 100%;
  position: relative;
  max-height: 100%;
  display: flex;
`;

export const Section = styled(Main.Section)`
  width: 100%;
  min-height: 100%;

  footer {
    width: 100%;
  }
`;

export const MainHeader = styled.div`
  width: 100%;
  height: 40px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: #ff820a;
  font-size: 0.9em;
`;

export const MainContainer = styled.main`
  padding-left: 15px;
`;

export const IconWrapper = styled.div`
  width: auto;
  height: 50%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  aspect-ratio: 1 / 1;

  svg {
    width: 100%;
    height: 100%;
  }

  .icon-caption {
    width: fit-content;
    font-size: 0.8em;
  }
`;
