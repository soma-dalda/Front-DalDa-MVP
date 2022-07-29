import styled from '@emotion/styled'
import { SqureButtonType } from './Boxes.type'

export const Boxes = styled.div`
  width: calc(100% - 15px);
  display: flex;
  height: fit-content;
  justify-content: space-between;
  margin-top: 10px;

  .cake {
    &::before {
      background: url(https://user-images.githubusercontent.com/63512217/181448460-d39f0b1b-0561-4c47-9f2c-5542b08fdf85.png)
        round;
    }
  }

  .cafe {
    &::before {
      background: url(https://user-images.githubusercontent.com/63512217/181451014-ad966483-1273-4c91-a694-4ebb00bbcea6.png)
        round;
    }
    cursor: not-allowed;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      right: 0;
      opacity: 0;
      background-color: #484848c4;
      transition: opacity 0.3s;
    }

    &:hover {
      &::after {
        content: '준비중 이에요';
        opacity: 1;
        color: #fff;
      }
    }
  }
`

export const SquareBox = styled.button<SqureButtonType>`
  margin-top: 10px;
  position: relative;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  border-radius: 16px;
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.06) 0px -2px 1px 0px inset;

  &::before {
    position: absolute;
    content: '';
    width: 100px;
    height: 90px;
    bottom: 20px;
    right: 20px;
  }
`

export const Rect = styled.button`
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.searchInputBG};
  border-radius: 16px;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    width: 50px;
    height: 70px;
    bottom: 0px;
    right: 20px;
  }

  h4 {
    font-size: 0.9em;
  }

  span {
    font-size: 0.8em;
  }
`
